"use client"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

const Navbar = ({ cartItems, onSearch, searchQuery, darkMode, onToggleDarkMode, onShowCart }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const location = useLocation()

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  // تابع برای بررسی فعال بودن لینک
  const isActiveLink = (path) => {
    if (path === "/" && location.pathname === "/page1") return true
    if (path === "/" && location.pathname === "/page1/") return true
    return location.pathname === `/page1${path}` || location.pathname.startsWith(`/page1${path}/`)
  }

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="navbar-container">
        <Link to="/page1" className="navbar-logo">
          TechShop
        </Link>

        <button className="mobile-menu-btn" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? "✕" : "☰"}
        </button>

        <ul className={`nav-menu ${showMobileMenu ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/page1" className={`nav-links ${isActiveLink("/") ? "active" : ""}`}>
              خانه
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/page1/products" className={`nav-links ${isActiveLink("/products") ? "active" : ""}`}>
              محصولات
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/page1/about" className={`nav-links ${isActiveLink("/about") ? "active" : ""}`}>
              درباره ما
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/page1/contact" className={`nav-links ${isActiveLink("/contact") ? "active" : ""}`}>
              تماس با ما
            </Link>
          </li>
        </ul>

        <div className="search-container">
          <input
            type="text"
            placeholder="جستجو..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className={`search-input ${darkMode ? "dark" : ""}`}
          />
          <button className="search-btn">🔍</button>
        </div>

        <div className="nav-icons">
          <button
            className="icon-btn theme-toggle"
            onClick={onToggleDarkMode}
            title={darkMode ? "حالت روشن" : "حالت تاریک"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <Link to="/page1/login" className="icon-btn" title="ورود / ثبت نام">
            👤
          </Link>

          <button className="icon-btn cart-btn" onClick={onShowCart} title="سبد خرید">
            🛒{cartItemsCount > 0 && <span className="cart-counter">{cartItemsCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
