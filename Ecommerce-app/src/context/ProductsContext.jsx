import { createContext, useContext, useEffect, useState } from 'react'
import { products as initialProducts } from '../data/products.js'

const ProductsContext = createContext(null)

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem('admin_products')
    return stored ? JSON.parse(stored) : initialProducts
  })

  useEffect(() => {
    localStorage.setItem('admin_products', JSON.stringify(products))
  }, [products])

  const addProduct = (product) => {
    setProducts((prev) => [...prev, { ...product, id: String(Date.now()) }])
  }

  const updateProduct = (id, updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p))
    )
  }

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <ProductsContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  const ctx = useContext(ProductsContext)
  if (!ctx) throw new Error('useProducts must be used within ProductsProvider')
  return ctx
}