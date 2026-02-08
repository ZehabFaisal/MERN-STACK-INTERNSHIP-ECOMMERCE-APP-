import { createContext, useContext, useEffect, useState } from 'react'
const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const signup = (data) => {
    localStorage.setItem('registeredUser', JSON.stringify(data))
  }

  const login = (data) => {
    const storedUser = JSON.parse(localStorage.getItem('registeredUser'))
    if (
      storedUser &&
      storedUser.email === data.email &&
      storedUser.password === data.password
    ) {
      localStorage.setItem('user', JSON.stringify(storedUser))
      setUser(storedUser)
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext);