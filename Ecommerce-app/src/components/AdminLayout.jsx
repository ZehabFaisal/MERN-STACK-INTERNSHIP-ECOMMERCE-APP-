import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar.jsx'

export default function AdminLayout() {
  return (
    <div className="page page-admin">
      <div className="admin-layout">
        <AdminSidebar />
        <main className="admin-main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}