"use client"
import "./Cart.css"

const Cart = ({ cartItems, onRemoveItem, onUpdateQuantity, darkMode }) => {
  const calculateItemPrice = (item) => {
    const basePrice = item.discount > 0 ? Math.round(item.price - (item.price * item.discount) / 100) : item.price
    return basePrice * item.quantity
  }

  const subtotal = cartItems.reduce((sum, item) => sum + calculateItemPrice(item), 0)
  const shipping = subtotal > 5000000 ? 0 : 150000
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className={`cart-container empty ${darkMode ? "dark" : ""}`}>
        <h2>سبد خرید شما</h2>
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <p>سبد خرید شما خالی است</p>
          <button className="continue-shopping">ادامه خرید</button>
        </div>
      </div>
    )
  }

  return (
    <div className={`cart-container ${darkMode ? "dark" : ""}`}>
      <h2>سبد خرید شما</h2>

      <div className="cart-items-container">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image || "/placeholder.svg"} alt={item.name} />
            </div>

            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <div className="cart-item-price">
                {item.discount > 0 ? (
                  <>
                    <span className="cart-original-price">{item.price.toLocaleString()} تومان</span>
                    <span className="cart-discounted-price">
                      {Math.round(item.price - (item.price * item.discount) / 100).toLocaleString()} تومان
                    </span>
                  </>
                ) : (
                  <span>{item.price.toLocaleString()} تومان</span>
                )}
              </div>
            </div>

            <div className="quantity-control">
              <button className="quantity-btn" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
              <span className="quantity">{item.quantity}</span>
              <button className="quantity-btn" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                -
              </button>
            </div>

            <div className="cart-item-total">{calculateItemPrice(item).toLocaleString()} تومان</div>

            <button onClick={() => onRemoveItem(item.id)} className="remove-btn" title="حذف از سبد خرید">
              🗑️
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>جمع سبد خرید:</span>
          <span>{subtotal.toLocaleString()} تومان</span>
        </div>
        <div className="summary-row">
          <span>هزینه ارسال:</span>
          <span>{shipping === 0 ? "رایگان" : `${shipping.toLocaleString()} تومان`}</span>
        </div>
        <div className="summary-row total">
          <span>مجموع:</span>
          <span>{total.toLocaleString()} تومان</span>
        </div>
      </div>

      <div className="cart-actions">
        <button className="continue-shopping">ادامه خرید</button>
        <button className="checkout-btn">تکمیل خرید</button>
      </div>
    </div>
  )
}

export default Cart
