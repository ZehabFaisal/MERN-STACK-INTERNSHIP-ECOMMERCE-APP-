import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-card-image-wrapper">
        <img src={product.image} alt={product.name} className="product-card-image" />
      </Link>
      <div className="product-card-body">
        <header className="product-card-header">
          <h3 className="product-card-title">{product.name}</h3>
          <span className="product-card-category">{product.category}</span>
        </header>
        <p className="product-card-description">{product.description}</p>
        <footer className="product-card-footer">
          <span className="product-card-price">${product.price.toFixed(2)}</span>
          <button       
            type="button"
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
        </footer>
      </div>
    </article>
  )
}