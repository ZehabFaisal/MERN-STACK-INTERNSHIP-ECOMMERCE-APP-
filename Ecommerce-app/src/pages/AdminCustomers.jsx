const Customers_Data = [
  {
    id: 'C-001',
    name: 'Ali Ahmed',
    email: 'ali_ahmed123@gmail.com',
    orders: 5,
    totalSpent: 729.45,
    status: 'Active',
  },
  {
    id: 'C-002',
    name: 'Hamza Khan',
    email: 'hamza_khan1000@gmail.com',
    orders: 2,
    totalSpent: 189.99,
    status: 'Active',
  },
  {
    id: 'C-003',
    name: 'Abdur Rehman',
    email: 'abdur_rehman804@gmail.com',
    orders: 1,
    totalSpent: 49.99,
    status: 'Inactive',
  },
]

export default function AdminCustomers() {
  return (
    <>
      <header className="page-header">
        <div>
          <h1 className="font-extrabold text-2xl">Customers</h1>
          <p>Overview of registered customers and their activity!</p>
        </div>
      </header>

      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Orders</th>
              <th>Total Spent</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              Customers_Data.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.orders}</td>
                  <td>${c.totalSpent.toFixed(2)}</td>
                  <td>{c.status}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}