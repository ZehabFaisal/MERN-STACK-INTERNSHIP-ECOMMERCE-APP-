import { NavLink } from 'react-router-dom'

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-header">
        <h2>Admin</h2>
        <p className="admin-sidebar-subtitle">Dashboard</p>
      </div>
      <nav className="admin-sidebar-nav">
        <NavLink to="/admin" end className="admin-nav-link">
          Overview
        </NavLink>
        <NavLink to="/admin/products" className="admin-nav-link">
          Products
        </NavLink>
        <NavLink to="/admin/orders" className="admin-nav-link">
          Orders
        </NavLink>
        <NavLink to="/admin/customers" className="admin-nav-link">
          Customers
        </NavLink>
        <NavLink to="/admin/settings" className="admin-nav-link">
          Settings
        </NavLink>
      </nav>
    </aside>
  )
}