const formatPrice = (price) =>
  new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price)

export default function CollectionStats({ stats }) {
  return (
    <div className="collection-stats" aria-label="Collection statistics">
      <div>
        <strong>{stats.visible}</strong>
        <span>Pieces</span>
      </div>

      <div>
        <strong>{stats.inStock}</strong>
        <span>In stock</span>
      </div>

      <div>
        <strong>{stats.saved}</strong>
        <span>Saved</span>
      </div>

      <div>
        <strong>{formatPrice(stats.averagePrice)}</strong>
        <span>Average</span>
      </div>
    </div>
  )
}
