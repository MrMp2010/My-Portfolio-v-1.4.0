"use client"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Product = ({ product, onAddToCart, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const navigate = useNavigate()

  const discountedPrice =
    product.discount > 0 ? Math.round(product.price - (product.price * product.discount) / 100) : null

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-${i}`} className="star full">
          ★
        </span>,
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className="star half">
          ★
        </span>,
      )
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star empty">
          ☆
        </span>,
      )
    }

    return stars
  }

  const handleProductClick = () => {
    navigate(`/product/${product.id}`)
  }

  const handleAddToCartClick = (e) => {
    e.stopPropagation()
    onAddToCart(product)
  }

  const handleToggleFavorite = (e) => {
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <div
      className={`product-card ${darkMode ? "dark" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleProductClick}
      style={{
        cursor: "pointer",
        background: darkMode ? "#2a2a2a" : "white",
        borderRadius: "12px",
        padding: "15px",
        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s",
        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
        position: "relative",
      }}
    >
      {product.discount > 0 && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "#ff4757",
            color: "white",
            padding: "5px 10px",
            borderRadius: "15px",
            fontSize: "0.8rem",
            fontWeight: "bold",
            zIndex: 2,
          }}
        >
          {product.discount}% تخفیف
        </div>
      )}

      <div style={{ position: "relative", marginBottom: "15px" }}>
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        >
          <button
            onClick={handleToggleFavorite}
            style={{
              background: isFavorite ? "#ff4757" : "rgba(255,255,255,0.9)",
              border: "none",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              cursor: "pointer",
              fontSize: "1.2rem",
              color: isFavorite ? "white" : "#666",
            }}
            title="افزودن به علاقه‌مندی‌ها"
          >
            ❤️
          </button>
        </div>
      </div>

      <div>
        <h3
          style={{
            fontSize: "1.1rem",
            marginBottom: "10px",
            color: darkMode ? "#e0e0e0" : "#2c3e50",
          }}
        >
          {product.name}
        </h3>

        <div style={{ marginBottom: "10px" }}>
          {discountedPrice ? (
            <>
              <span
                style={{
                  textDecoration: "line-through",
                  color: "#999",
                  fontSize: "0.9rem",
                  marginLeft: "10px",
                }}
              >
                {product.price.toLocaleString()} تومان
              </span>
              <span
                style={{
                  color: darkMode ? "#e0e0e0" : "#2c3e50",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                {discountedPrice.toLocaleString()} تومان
              </span>
            </>
          ) : (
            <span
              style={{
                color: darkMode ? "#e0e0e0" : "#2c3e50",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              {product.price.toLocaleString()} تومان
            </span>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            marginBottom: "15px",
            color: "#ffc107",
          }}
        >
          {renderStars(product.rating)}
          <span
            style={{
              color: "#666",
              fontSize: "0.9rem",
              marginRight: "5px",
            }}
          >
            ({product.rating})
          </span>
        </div>

        <button
          onClick={handleAddToCartClick}
          style={{
            width: "100%",
            background: "linear-gradient(135deg, #2196f3 0%, #4caf50 100%)",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "600",
            transition: "all 0.3s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          🛒 افزودن به سبد
        </button>
      </div>
    </div>
  )
}

export default Product
