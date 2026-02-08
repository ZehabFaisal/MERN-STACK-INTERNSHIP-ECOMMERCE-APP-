import { useState } from 'react'

export default function AdminSettings() {
  const [storeName, setStoreName] = useState('Ecommerce Store')
  const [currency, setCurrency] = useState('USD')
  const [orderNotifications, setOrderNotifications] = useState(true)

  return (
    <>
      <header className="page-header">
        <div>
          <h1>Settings</h1>
          <p>Configure basic store preferences (UI only).</p>
        </div>
      </header>

      <form
        className="admin-settings-form"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <div className="form-group">
          <label htmlFor="storeName">Store name</label>
          <input
            id="storeName"
            type="text"
            className="admin-input"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="currency">Default currency</label>
          <select
            id="currency"
            className="admin-input"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="INR">INR (₹)</option>
          </select>
        </div>

        <div className="form-group form-group-inline">
          <label htmlFor="notifications">Order notifications</label>
          <input
            id="notifications"
            type="checkbox"
            checked={orderNotifications}
            onChange={(e) => setOrderNotifications(e.target.checked)}
          />
          <span className="input-help">Send an email when a new order is placed.</span>
        </div>

        <button type="submit" className="btn btn-primary">
          Save changes
        </button>
      </form>
    </>
  )
}

