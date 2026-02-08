import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Auth() {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { signup, login } = useAuth()
  const navigate = useNavigate()

  const toggleMode = () => {
    setMode((prev) => (prev === 'login' ? 'signup' : 'login'))
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (mode === 'signup') {
      signup(form)
      setMode('login')
    } 
    else {
      const success = login(form)
      if (success) {
        navigate('/')
      } 
      else {
        alert('Error! you have entered an invalid credentials')
      }
    }
  }

  return (
    <div className="page page-auth">
      <div className="auth-card">
        <header className="auth-header">
          <h1 className="text-center"> {mode === 'login' ? 'Welcome back' : 'Create an account'} </h1>
        </header>

        <form className="auth-form" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input id="name" onChange={handleChange} placeholder='Enter you name....' required />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={handleChange} placeholder='Enter you email address....' required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={handleChange} 
            placeholder='Enter you password....'  required />
          </div>

          <button type="submit" className="btn btn-primary">
            {mode === 'login' ? 'Login' : 'Create Account'}
          </button>
        </form>

        <footer className="auth-footer">
          <button className="link-button" onClick={toggleMode}>
            {mode === 'login' ? 'Sign up' : 'Login'}
          </button>
        </footer>
      </div>
    </div>
  )
}