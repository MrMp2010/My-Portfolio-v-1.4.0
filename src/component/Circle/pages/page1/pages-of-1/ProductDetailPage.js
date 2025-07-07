"use client"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import "./ProductDetailPage.css"

const ProductDetailPage = ({ products, onAddToCart, darkMode }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  const product = products.find((p) => p.id === Number.parseInt(id))

  if (!product) {
    return (
      <div className={`product-detail-page ${darkMode ? "dark-mode" : ""}`}>
        <div className="not-found">
          <h2>محصول یافت نشد!</h2>
          <button onClick={() => navigate("/products")} className="back-btn">
            بازگشت به محصولات
          </button>
        </div>
      </div>
    )
  }

  const discountedPrice =
    product.discount > 0 ? Math.round(product.price - (product.price * product.discount) / 100) : null

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product)
    }
  }

  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? "filled" : ""}`}
          style={{ color: i <= rating ? "#ffc107" : "#e0e0e0" }}
        >
          ★
        </span>,
      )
    }
    return stars
  }

  return (
    <div className={`product-detail-page ${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← بازگشت
        </button>

        <div className="product-detail">
          <div className="product-image-section">
            <div className="main-image">
              {product.discount > 0 && <div className="discount-badge">{product.discount}% تخفیف</div>}
              <img src={product.image || "/placeholder.svg"} alt={product.name}/>
            </div>
          </div>

          <div className="product-info-section">
            <div className="product-header">
              <h1>{product.name}</h1>
              <button
                className={`favorite-btn ${isFavorite ? "active" : ""}`}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                ❤️
              </button>
            </div>

            <div className="product-rating">
              <div className="stars">{renderStars(product.rating)}</div>
              <span className="rating-text">({product.rating} از 5)</span>
            </div>

            <div className="product-price">
              {discountedPrice ? (
                <>
                  <span className="original-price">{product.price.toLocaleString()} تومان</span>
                  <span className="discounted-price">{discountedPrice.toLocaleString()} تومان</span>
                  <span className="savings">
                    شما {(product.price - discountedPrice).toLocaleString()} تومان صرفه‌جویی می‌کنید!
                  </span>
                </>
              ) : (
                <span className="price">{product.price.toLocaleString()} تومان</span>
              )}
            </div>

            <div className="product-description">
              <h3>توضیحات محصول</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-specs">
              <h3>مشخصات فنی</h3>
              <ul>
                {product.specs?.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            <div className="purchase-section">
              <div className="quantity-selector">
                <label>تعداد:</label>
                <div className="quantity-controls">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>

              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                🛒 افزودن به سبد خرید
              </button>
            </div>

            <div className="product-features">
              <div className="feature">
                <span className="icon">🚚</span>
                <span>ارسال رایگان برای سفارش‌های بالای 500 هزار تومان</span>
              </div>
              <div className="feature">
                <span className="icon">🔒</span>
                <span>ضمانت اصالت کالا</span>
              </div>
              <div className="feature">
                <span className="icon">↩️</span>
                <span>7 روز ضمانت بازگشت</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
