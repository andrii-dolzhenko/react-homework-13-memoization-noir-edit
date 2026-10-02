import ProductCard, { ProductCardBase } from './ProductCard'

export default function ProductGrid({
  products,
  favorites,
  onToggleFavorite,
  onOpenProduct,
  optimized,
}) {
  const CardComponent = optimized ? ProductCard : ProductCardBase

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <CardComponent
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          onToggleFavorite={onToggleFavorite}
          onOpenProduct={onOpenProduct}
          eager={index < 6}
        />
      ))}
    </div>
  )
}
