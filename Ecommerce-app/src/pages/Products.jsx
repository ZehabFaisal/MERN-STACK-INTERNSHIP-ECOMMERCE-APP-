import ProductCard from '../components/ProductCard.jsx'
import { useProducts } from '../context/ProductsContext.jsx'

export default function Products() {
  const { products } = useProducts()

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1>Products</h1>
          <p>Browse all our available items.</p>
        </div>
      </header>

      <div className="products-grid">
        {
          products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))
        }
      </div>
    </div>
  )
}