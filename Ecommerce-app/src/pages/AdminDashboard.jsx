import { useCart } from '../context/CartContext.jsx'
import { useProducts } from '../context/ProductsContext.jsx'

export default function AdminDashboard() {
  const { totalCount, totalPrice } = useCart()
  const { products } = useProducts()

  return (
    <>
      <header className="page-header">
        <div>
          <h1 className="font-extrabold text-2xl">Dashboard</h1>
          <p>High-level overview of your ecommerce store.</p>
        </div>
      </header>

      <section className="admin-cards cursor-pointer">
        <div className="admin-card text-center">
          <h3 className='text-3xl font-bold underline'>Total Products</h3>
          <p className="admin-card-value">{products.length}</p>
          <p className="admin-card-subtitle">Active products in catalog</p>
        </div>
        <div className="admin-card text-center">
          <h3 className='text-3xl font-bold underline'>Items in Carts</h3>
          <p className="admin-card-value">{totalCount}</p>
          <p className="admin-card-subtitle">
            Live cart count
          </p> 
        </div>
        <div className="admin-card text-center">
          <h3 className='text-3xl font-bold underline'>Cart Value</h3>
          <p className="admin-card-value">${totalPrice.toFixed(2)}</p>
          <p className="admin-card-subtitle">Current cart total across items</p>
        </div>
      </section>

      <section className="section">
        <header className="section-header">
          <h2>Recent Orders</h2>
          <p className="section-subtitle">Static mock data for UI demonstration</p>
        </header>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Total</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1024</td>
                <td>Ali Ahmed</td>
                <td>
                  <span className="status-badge status-success">Paid</span>
                </td>
                <td>$249.99</td>
                <td>Feb 1, 2026</td>
              </tr>
              <tr>
                <td>#1023</td>
                <td>Hamza Khan</td>
                <td>
                  <span className="status-badge status-warning">Pending</span>
                </td>
                <td>$89.99</td>
                <td>Jan 31, 2026</td>
              </tr>
              <tr>
                <td>#1022</td>
                <td>Abdur Rehman</td>
                <td>
                  <span className="status-badge status-muted">Refunded</span>
                </td>
                <td>$129.99</td>
                <td>Jan 30, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <header className="section-header">
          <h2>Inventory Snapshot</h2>
        </header>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>{product.stock}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}