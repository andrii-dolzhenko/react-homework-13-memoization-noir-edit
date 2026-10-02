import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const formatPrice = (price) =>
  new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price)

export default function ProductModal({
  product,
  isFavorite,
  onToggleFavorite,
  onClose,
}) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <div
      className="product-modal-backdrop"
      role="presentation"
      onMouseDown={handleBackdropClick}
    >
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        <button
          ref={closeButtonRef}
          className="product-modal__close"
          type="button"
          aria-label="Close product details"
          onClick={onClose}
        >
          ×
        </button>

        <div className="product-modal__media">
          <img
            src={product.image}
            alt={product.name}
            decoding="sync"
          />
        </div>

        <div className="product-modal__details">
          <p className="product-modal__category">{product.category}</p>

          <h2 id="product-modal-title">{product.name}</h2>

          <p className="product-modal__price">
            {formatPrice(product.price)}
          </p>

          <p className="product-modal__description">
            {product.description}
          </p>

          <dl className="product-specifications">
            <div>
              <dt>Material</dt>
              <dd>{product.material}</dd>
            </div>

            <div>
              <dt>Hardware</dt>
              <dd>{product.hardware}</dd>
            </div>

            <div>
              <dt>Dimensions</dt>
              <dd>{product.dimensions}</dd>
            </div>

            <div>
              <dt>Collection</dt>
              <dd>{product.year}</dd>
            </div>

            <div>
              <dt>Availability</dt>
              <dd>{product.inStock ? 'In stock' : 'Currently unavailable'}</dd>
            </div>
          </dl>

          <button
            className={`modal-favorite ${
              isFavorite ? 'is-favorite' : ''
            }`}
            type="button"
            aria-pressed={isFavorite}
            onClick={() => onToggleFavorite(product.id)}
          >
            <span aria-hidden="true">{isFavorite ? '♥' : '♡'}</span>
            {isFavorite ? 'Saved to edit' : 'Save to edit'}
          </button>

          <div className="product-modal__principles">
            <span>Timeless design</span>
            <span>Premium materials</span>
            <span>Modern silhouette</span>
          </div>
        </div>
      </section>
    </div>,
    document.body,
  )
}
