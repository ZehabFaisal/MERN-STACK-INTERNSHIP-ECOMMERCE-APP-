import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { useProducts } from '../context/ProductsContext.jsx'

export default function Home() {
  const { products } = useProducts()
  const featured = products.slice(0, 3)

  return (
    <div className="page page-home">
      <section className="hero">
        <div className="hero-content">
          <h1>Modern gadgets for everyday life.</h1>
          <p>
            Explore curated tech products with a clean shopping experience built on the
            MERN stack.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">
              Shop Now
            </Link>
            <Link to="/admin" className="btn btn-ghost">
              View Admin Dashboard
            </Link>
          </div>
        </div>
        <div className="hero-banner">
          <div className="hero-banner-card">
            <p>Free shipping over $100</p>
            <p>Secure checkout</p>
            <p>Fast delivery</p>
          </div>
        </div>
      </section>

      <section className="section">
        <header className="section-header">
          <h2>Featured Products</h2>
          <Link to="/products" className="section-link">
            View all
          </Link>
        </header>
        <div className="products-grid">
          {
            featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>
      </section>
      
    </div>
  )
}