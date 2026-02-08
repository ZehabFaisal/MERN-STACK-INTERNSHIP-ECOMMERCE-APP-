import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'

export default function Navbar() {
  const { totalCount } = useCart()
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          E-Mart
        </Link>

        <nav className={`navbar-links ${open ? 'navbar-links-open' : ''}`}>
          <div className='ml-80 flex justify-center items-center gap-5'>
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/products" className="nav-link">Products</NavLink>
          <NavLink to="/cart" className="nav-link">Cart</NavLink>
          </div>

          <div className='ml-80'>
          {
            !user ? (
              <NavLink to="/auth" className="nav-link nav-link-primary">
                Login / Signup
              </NavLink>
            ) : (
              <NavLink to="/auth" className="nav-link nav-link-primary" onClick={handleLogout}>
                Logout
              </NavLink>
            )
          }
          </div>

        </nav>

        <Link to="/cart" className="navbar-cart">
          🛒 {totalCount}
        </Link>
      </div>
    </header>
  )
}