import { incrementPerformanceMetric } from './performanceMetrics'

export function calculateCollectionStats(products, favorites) {
  incrementPerformanceMetric('statsCalculations')

  const inStock = products.filter((product) => product.inStock).length

  const saved = products.filter((product) =>
    favorites.includes(product.id),
  ).length

  const averagePrice = products.length
    ? Math.round(
        products.reduce((total, product) => total + product.price, 0) /
          products.length,
      )
    : 0

  return {
    visible: products.length,
    inStock,
    saved,
    averagePrice,
  }
}
