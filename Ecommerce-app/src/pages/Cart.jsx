import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';

export default function Cart() {
  const { items, totalCount, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handle_Checkout = () => {
    if(items.length === 0) return;
    clearCart();
    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 3000);
  };

  return (
    <div className="page page-cart">
      <header className="page-header">
        <div>
          <h1>Your Cart</h1>
          <p>You have {totalCount} item(s) in your cart.</p>
        </div>
      </header>

      {
        orderPlaced && (
          <div className="order-success bg-green-100 border border-green-400 text-green-700
            p-4 rounded mb-4">
            Congratulations! Your order has been placed successfully.
          </div>
        )
      }

      {!orderPlaced && items.length > 0 && (
        <div className="cart-grid">
          <div className="cart-items">
            {items.map((i) => (
              <div key={i.id} className="cart-item">
                <div className="cart-item-main">
                  <img src={i.image} alt={i.name} className="cart-item-image" />
                  <div>
                    <h3 className="cart-item-title">{i.name}</h3>
                    <p className="cart-item-category">{i.category}</p>
                    <p className="cart-item-price">
                      ${i.price.toFixed(2)} x {i.quantity} = ${(i.price * i.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="cart-item-actions">
                  <label className="cart-item-quantity">
                    Qty
                    <input
                      type="number"
                      min="1"
                      value={i.quantity}
                      onChange={(e) =>
                        updateQuantity(i.id, Number.parseInt(e.target.value, 10) || 1)
                      }
                    />
                  </label>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => removeFromCart(i.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <p>Total items: {totalCount}</p>
            <p className="cart-summary-total">Total: ${totalPrice.toFixed(2)}</p>
            <button
              type="button"
              className="btn btn-primary"
              disabled={items.length === 0}
              onClick={handle_Checkout} >
              Proceed to Checkout
            </button>

            <button
              type="button"
              className="btn btn-ghost"
              onClick={clearCart}
              disabled={items.length === 0} >
              Clear Cart
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}