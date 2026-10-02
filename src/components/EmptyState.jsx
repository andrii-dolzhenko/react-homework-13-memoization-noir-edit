export default function EmptyState({ onReset }) {
  return (
    <div className="empty-state">
      <p className="eyebrow">NO MATCHES</p>
      <h3>No pieces found</h3>
      <p>
        No objects match your current selection. Reset the filters to return to
        the complete edit.
      </p>

      <button className="secondary-button" onClick={onReset} type="button">
        Reset filters
      </button>
    </div>
  )
}
