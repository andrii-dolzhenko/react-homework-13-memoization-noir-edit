import { useEffect, useRef, useState } from 'react'
import { getPerformanceMetrics } from '../utils/performanceMetrics'

const emptyResult = {
  parentRenders: 0,
  filterCalculations: 0,
  statsCalculations: 0,
  productCardRenders: 0,
}

export default function PerformanceInspector({
  mode,
  onModeChange,
  demoTick,
  onTriggerRender,
  visibleCount,
}) {
  const beforeCheckRef = useRef(null)
  const [result, setResult] = useState(null)

  useEffect(() => {
    if (!beforeCheckRef.current) {
      return
    }

    const before = beforeCheckRef.current
    const after = getPerformanceMetrics()

    setResult({
      parentRenders:
        after.parentRenders - before.metrics.parentRenders,
      filterCalculations:
        after.filterCalculations - before.metrics.filterCalculations,
      statsCalculations:
        after.statsCalculations - before.metrics.statsCalculations,
      productCardRenders:
        after.productCardRenders - before.metrics.productCardRenders,
    })

    beforeCheckRef.current = null
  }, [demoTick])

  const handleModeChange = (nextMode) => {
    setResult(null)
    onModeChange(nextMode)
  }

  const handleRenderCheck = () => {
    beforeCheckRef.current = {
      metrics: getPerformanceMetrics(),
    }

    onTriggerRender()
  }

  const displayedResult = result ?? emptyResult
  const isOptimized = mode === 'optimized'

  return (
    <aside className="performance-inspector">
      <div className="performance-inspector__heading">
        <div>
          <p className="eyebrow">PERFORMANCE</p>
          <h2>Memoization inspector</h2>
        </div>

        <div
          className="performance-mode"
          role="group"
          aria-label="Performance comparison mode"
        >
          <button
            className={!isOptimized ? 'is-active' : ''}
            type="button"
            onClick={() => handleModeChange('baseline')}
          >
            Baseline
          </button>

          <button
            className={isOptimized ? 'is-active' : ''}
            type="button"
            onClick={() => handleModeChange('optimized')}
          >
            Optimized
          </button>
        </div>
      </div>

      <p className="performance-inspector__intro">
        Trigger an unrelated parent update and compare how often derived data
        and product cards are recalculated. The collection UI itself stays
        unchanged in both modes.
      </p>

      <div className="performance-inspector__status">
        <div>
          <span>Derived collection</span>
          <strong>{isOptimized ? 'useMemo cached' : 'Recalculated'}</strong>
        </div>

        <div>
          <span>Product callbacks</span>
          <strong>{isOptimized ? 'useCallback stable' : 'Recreated'}</strong>
        </div>

        <div>
          <span>Product cards</span>
          <strong>{isOptimized ? 'React.memo' : 'Regular render'}</strong>
        </div>

        <div>
          <span>Visible pieces</span>
          <strong>{visibleCount}</strong>
        </div>
      </div>

      <div className="performance-check">
        <div>
          <p>Unrelated render check</p>
          <span>
            The button changes only demo state. Filters, sorting, favorites and
            product data remain untouched.
          </span>
        </div>

        <button type="button" onClick={handleRenderCheck}>
          Trigger parent render
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="performance-results" aria-live="polite">
        <div>
          <span>Parent renders</span>
          <strong>{displayedResult.parentRenders}</strong>
        </div>

        <div>
          <span>Filter / sort calculations</span>
          <strong>{displayedResult.filterCalculations}</strong>
        </div>

        <div>
          <span>Statistics calculations</span>
          <strong>{displayedResult.statsCalculations}</strong>
        </div>

        <div>
          <span>Product card renders</span>
          <strong>{displayedResult.productCardRenders}</strong>
        </div>
      </div>

      <p className="performance-inspector__note">
        {result
          ? isOptimized
            ? 'With memoization, the unrelated update should leave collection calculations and unchanged product-card renders at zero.'
            : 'Baseline mode intentionally recalculates derived collection data and renders visible product cards on the same unrelated update.'
          : 'Choose a mode and run the check. In development, React StrictMode may intentionally invoke render logic more than once, so compare zero vs non-zero work rather than relying on an exact count.'}
      </p>
    </aside>
  )
}
