import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useProducts } from '../context/ProductsContext.jsx'

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const { products } = useProducts()

  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="page">
        <h1>Error! Product Is Not Found</h1>
        <p>The product you are looking for does not exist.</p>
      </div>
    )
  }

  return (
    <div className="page page-product-details">
      <div className="product-details-layout">
        <div className="product-details-image-wrapper">
          <img src={product.image} alt={product.name} className="product-details-image" />
        </div>
        <div className="product-details-info">
          <h1>{product.name}</h1>
          <p className="product-details-category">{product.category}</p>
          <p className="product-details-description">{product.description}</p>
          <p className="product-details-price">${product.price.toFixed(2)}</p>
          <p className="product-details-stock">In stock: {product.stock}</p>
          <button
            type="button" className="btn btn-primary" onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}