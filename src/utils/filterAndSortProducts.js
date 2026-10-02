import { incrementPerformanceMetric } from './performanceMetrics'

export function filterAndSortProducts(
  products,
  { query, category, sortBy, inStockOnly },
) {
  incrementPerformanceMetric('filterCalculations')

  const normalizedQuery = query.trim().toLowerCase()

  const filteredProducts = products.filter((product) => {
    const matchesQuery =
      !normalizedQuery ||
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.category.toLowerCase().includes(normalizedQuery) ||
      product.material.toLowerCase().includes(normalizedQuery)

    const matchesCategory =
      category === 'All' || product.category === category

    const matchesStock = !inStockOnly || product.inStock

    return matchesQuery && matchesCategory && matchesStock
  })

  return [...filteredProducts].sort((first, second) => {
    switch (sortBy) {
      case 'price-low':
        return first.price - second.price
      case 'price-high':
        return second.price - first.price
      case 'name':
        return first.name.localeCompare(second.name)
      case 'newest':
      default:
        return second.year - first.year
    }
  })
}
