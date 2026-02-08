const Orders_Data = [
  {
    id: '#1024',
    customer: 'Ali Ahmed',
    status: 'Paid',
    statusClass: 'status-success',
    total: 249.99,
    items: 3,
    date: 'Feb 1, 2026',
  },
  {
    id: '#1023',
    customer: 'Hamza Khan',
    status: 'Pending',
    statusClass: 'status-warning',
    total: 89.99,
    items: 1,
    date: 'Jan 31, 2026',
  },
  {
    id: '#1022',
    customer: 'Abdur Rehman',
    status: 'Refunded',
    statusClass: 'status-muted',
    total: 129.99,
    items: 2,
    date: 'Jan 30, 2026',
  },
]

export default function AdminOrders() {
  return (
    <>
      <header className="page-header">
        <div>
          <h1 className="text-2xl font-extrabold">Orders</h1>
          <p>Track recent orders and their status.</p>
        </div>
      </header>

      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Items</th>
              <th>Total</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {
              Orders_Data.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td> <span className={`status-badge ${order.statusClass}`}>{order.status}</span> </td>
                  <td>{order.items}</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>{order.date}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}