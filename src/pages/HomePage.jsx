import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CollectionToolbar from '../components/CollectionToolbar'
import CollectionStats from '../components/CollectionStats'
import ProductGrid from '../components/ProductGrid'
import ProductModal from '../components/ProductModal'
import EmptyState from '../components/EmptyState'
import EditorialSection from '../components/EditorialSection'
import PerformanceInspector from '../components/PerformanceInspector'
import Footer from '../components/Footer'
import { categories, products } from '../data/products'
import { filterAndSortProducts } from '../utils/filterAndSortProducts'
import { calculateCollectionStats } from '../utils/calculateCollectionStats'
import { incrementPerformanceMetric } from '../utils/performanceMetrics'

export default function HomePage() {
  const location = useLocation()
  const navigate = useNavigate()

  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [sortBy, setSortBy] = useState('newest')
  const [inStockOnly, setInStockOnly] = useState(false)
  const [favorites, setFavorites] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isEditorialExpanded, setIsEditorialExpanded] = useState(false)
  const [performanceMode, setPerformanceMode] = useState('optimized')
  const [demoTick, setDemoTick] = useState(0)

  // Development instrumentation for the homework performance demo.
  incrementPerformanceMetric('parentRenders')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  useEffect(() => {
    if (location.state?.scrollTo === 'collection') {
      window.requestAnimationFrame(() => {
        document
          .getElementById('collection')
          ?.scrollIntoView({ behavior: 'smooth' })
      })

      navigate('/', { replace: true, state: null })
    }
  }, [location.state, navigate])

  // Cache derived catalog data until the actual filter inputs change.
  const optimizedVisibleProducts = useMemo(() => {
    if (performanceMode !== 'optimized') {
      return null
    }

    return filterAndSortProducts(products, {
      query,
      category,
      sortBy,
      inStockOnly,
    })
  }, [category, inStockOnly, performanceMode, query, sortBy])

  const visibleProducts =
    performanceMode === 'optimized'
      ? optimizedVisibleProducts
      : filterAndSortProducts(products, {
          query,
          category,
          sortBy,
          inStockOnly,
        })

  const optimizedCollectionStats = useMemo(() => {
    if (performanceMode !== 'optimized') {
      return null
    }

    return calculateCollectionStats(optimizedVisibleProducts, favorites)
  }, [favorites, optimizedVisibleProducts, performanceMode])

  const collectionStats =
    performanceMode === 'optimized'
      ? optimizedCollectionStats
      : calculateCollectionStats(visibleProducts, favorites)

  // Stable callbacks keep memoized ProductCard props referentially equal.
  const handleToggleFavorite = useCallback((productId) => {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(productId)
        ? currentFavorites.filter((id) => id !== productId)
        : [...currentFavorites, productId],
    )
  }, [])

  const handleOpenProduct = useCallback((product) => {
    setSelectedProduct(product)
  }, [])

  const handleCloseProduct = useCallback(() => {
    setSelectedProduct(null)
  }, [])

  const handleResetFilters = useCallback(() => {
    setQuery('')
    setCategory('All')
    setSortBy('newest')
    setInStockOnly(false)
  }, [])

  const handleEditorialToggle = useCallback(() => {
    setIsEditorialExpanded((currentValue) => !currentValue)
  }, [])

  const handleDemoRender = useCallback(() => {
    setDemoTick((currentValue) => currentValue + 1)
  }, [])

  const optimized = performanceMode === 'optimized'

  const productToggleFavorite = optimized
    ? handleToggleFavorite
    : (productId) => handleToggleFavorite(productId)

  const productOpen = optimized
    ? handleOpenProduct
    : (product) => handleOpenProduct(product)

  return (
    <>
      <Header
        categories={categories}
        activeCategory={category}
        onCategoryChange={setCategory}
      />

      <main>
        <Hero />

        <section className="collection-section" id="collection">
          <div className="section-heading">
            <p className="eyebrow">THE COLLECTION</p>

            <h2>
              Iconic pieces
              <span>for a higher standard</span>
            </h2>
          </div>

          <CollectionToolbar
            query={query}
            onQueryChange={setQuery}
            category={category}
            categories={categories}
            onCategoryChange={setCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
            inStockOnly={inStockOnly}
            onInStockChange={setInStockOnly}
            onReset={handleResetFilters}
          />

          <CollectionStats stats={collectionStats} />

          {visibleProducts.length > 0 ? (
            <ProductGrid
              products={visibleProducts}
              favorites={favorites}
              onToggleFavorite={productToggleFavorite}
              onOpenProduct={productOpen}
              optimized={optimized}
            />
          ) : (
            <EmptyState onReset={handleResetFilters} />
          )}
        </section>

        <EditorialSection
          expanded={isEditorialExpanded}
          onToggle={handleEditorialToggle}
        />

        <PerformanceInspector
          mode={performanceMode}
          onModeChange={setPerformanceMode}
          demoTick={demoTick}
          onTriggerRender={handleDemoRender}
          visibleCount={visibleProducts.length}
        />
      </main>

      <Footer
        categories={categories}
        onCategoryChange={setCategory}
      />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isFavorite={favorites.includes(selectedProduct.id)}
          onToggleFavorite={handleToggleFavorite}
          onClose={handleCloseProduct}
        />
      )}
    </>
  )
}
