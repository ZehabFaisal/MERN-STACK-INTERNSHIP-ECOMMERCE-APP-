import { useState } from 'react'
import { useProducts } from '../context/ProductsContext.jsx'

export default function AdminProducts() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)

  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    image: '',
    description: '',
  })

  const categories = ['all', ...new Set(products.map((p) => p.category))]

  const filtered = products.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(query.toLowerCase())
    const matchesCategory = category === 'all' || product.category === category
    return matchesName && matchesCategory
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.price || !form.category) return

    const payload = {
      name: form.name,
      price: Number.parseFloat(form.price) || 0,
      category: form.category,
      stock: Number.parseInt(form.stock, 10) || 0,
      image:
        form.image ||
        'https://images.pexels.com/photos/7156889/pexels-photo-7156889.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        form.description || 'Newly added product from admin dashboard.',
    }

    if (editingId) {
      updateProduct(editingId, payload)
    } else {
      addProduct(payload)
    }

    setForm({
      name: '',
      price: '',
      category: '',
      stock: '',
      image: '',
      description: '',
    })

    setEditingId(null)
    setShowForm(false)
  }

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      price: product.price,
      category: product.category,
      stock: product.stock,
      image: product.image,
      description: product.description,
    })
    setEditingId(product.id)
    setShowForm(true)
  }

  const handleDelete = (id) => {
    if (alert('Are you sure you want to delete this product? If yes then, click on Ok')) {
      deleteProduct(id)
    }
  }

  return (
    <>
      <header className="page-header">
        <div>
          <h1 className="text-2xl font-extrabold">Products</h1>
          <p>Manage products in your catalog.</p>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setShowForm((prev) => !prev)
            setEditingId(null)
          }}
        >
          {showForm ? 'Close' : '+ Add Product'}
        </button>
      </header>

      {showForm && (
        <form className="admin-settings-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              className="admin-input"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              name="price"
              className="admin-input"
              type="number"
              min="0"
              step="0.01"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              id="category"
              name="category"
              className="admin-input"
              type="text"
              value={form.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="stock">Stock</label>
            <input
              id="stock"
              name="stock"
              className="admin-input"
              type="number"
              min="0"
              value={form.stock}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              id="image"
              name="image"
              className="admin-input"
              type="url"
              value={form.image}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              className="admin-input"
              type="text"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary mb-5 mt-3">
            {
              editingId ? 'Update Product' : 'Save Product'
            }
          </button>
        </form>
      )}

      <div className="admin-filters">
        <input
          className="admin-input"
          type="text"
          placeholder="Search by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="admin-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'All categories' : cat}
            </option>
          ))}
        </select>
      </div>

      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>${p.price.toFixed(2)}</td>
                <td>{p.stock}</td>
                <td className="flex gap-2">
                  <button
                    className="btn btn-sm btn-secondary bg-green-600 text-black"
                    onClick={() => handleEdit(p)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger bg-red-600 text-black"
                    onClick={() => handleDelete(p.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {
              filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-red-500">
                    Error! No products match your filters...
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}