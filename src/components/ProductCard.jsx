import { memo } from 'react'
import { incrementPerformanceMetric } from '../utils/performanceMetrics'

const formatPrice = (price) =>
  new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price)

export function ProductCardBase({
  product,
  isFavorite,
  onToggleFavorite,
  onOpenProduct,
  eager = false,
}) {
  incrementPerformanceMetric('productCardRenders')

  return (
    <article className="product-card">
      <div className="product-card__media">
        <button
          className="product-card__image-button"
          type="button"
          aria-label={`View details for ${product.name}`}
          onClick={() => onOpenProduct(product)}
        >
          <img
            src={product.image}
            alt={product.name}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
          />
        </button>

        <button
          className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`}
          type="button"
          aria-label={
            isFavorite
              ? `Remove ${product.name} from favorites`
              : `Save ${product.name} to favorites`
          }
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite(product.id)}
        >
          <span aria-hidden="true">{isFavorite ? '♥' : '♡'}</span>
        </button>

        {!product.inStock && (
          <span className="sold-out-label">Currently unavailable</span>
        )}
      </div>

      <button
        className="product-card__content"
        type="button"
        onClick={() => onOpenProduct(product)}
      >
        <span>
          <small>{product.category}</small>
          <strong>{product.name}</strong>
          <em>{product.material}</em>
        </span>

        <b>{formatPrice(product.price)}</b>
      </button>
    </article>
  )
}

// Skip unchanged cards when unrelated parent state updates.
const ProductCard = memo(ProductCardBase)

export default ProductCard
