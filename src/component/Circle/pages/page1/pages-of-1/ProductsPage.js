"use client"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import Product from "../components-for-page1/Product"
import "./ProductsPage.css"

const ProductsPage = ({ products, onAddToCart, darkMode, searchQuery }) => {
  const [activeCategory, setActiveCategory] = useState("all")
  const location = useLocation()

  // دریافت دسته‌بندی از URL
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const category = params.get("category")
    if (category) {
      setActiveCategory(category)
    }
  }, [location])

  // فیلتر محصولات
  const filteredProducts = products
    .filter((product) => activeCategory === "all" || product.category === activeCategory)
    .filter(
      (product) =>
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )

  return (
    <div className={`products-page ${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <div className="page-header">
          <h1>تمام محصولات</h1>
          <p>مجموعه کاملی از بهترین محصولات دیجیتال</p>
        </div>

        {/* فیلتر دسته‌بندی */}
        <div className="category-filter">
          <button
            className={`category-btn ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            همه محصولات ({products.length})
          </button>
          <button
            className={`category-btn ${activeCategory === "laptop" ? "active" : ""}`}
            onClick={() => setActiveCategory("laptop")}
          >
            لپتاپ ({products.filter((p) => p.category === "laptop").length})
          </button>
          <button
            className={`category-btn ${activeCategory === "mobile" ? "active" : ""}`}
            onClick={() => setActiveCategory("mobile")}
          >
            موبایل ({products.filter((p) => p.category === "mobile").length})
          </button>
          <button
            className={`category-btn ${activeCategory === "tablet" ? "active" : ""}`}
            onClick={() => setActiveCategory("tablet")}
          >
            تبلت ({products.filter((p) => p.category === "tablet").length})
          </button>
          <button
            className={`category-btn ${activeCategory === "accessories" ? "active" : ""}`}
            onClick={() => setActiveCategory("accessories")}
          >
            لوازم جانبی ({products.filter((p) => p.category === "accessories").length})
          </button>
        </div>

        {/* نمایش محصولات */}
        <div className="products-section">
          <div className="products-header">
            <h2>
              {searchQuery
                ? `نتایج جستجو برای: ${searchQuery} (${filteredProducts.length} محصول)`
                : `${activeCategory === "all" ? "همه محصولات" : activeCategory} (${filteredProducts.length} محصول)`}
            </h2>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <div className="no-products-icon">🔍</div>
              <h3>محصولی یافت نشد!</h3>
              <p>لطفاً کلمات کلیدی دیگری امتحان کنید یا دسته‌بندی دیگری انتخاب کنید.</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <Product key={product.id} product={product} onAddToCart={onAddToCart} darkMode={darkMode} />
              ))}
            </div>
          )}
        </div>

        {/* بخش اضافی برای طول بیشتر */}
        <div className="extra-products-content">
          <h2>برندهای معتبر همکار ما</h2>
          <p>
            ما با بهترین و معتبرترین برندهای دنیا همکاری داریم تا بتوانیم محصولات با کیفیت و اصل را به شما ارائه دهیم.
            تمام محصولات ما دارای گارانتی معتبر و خدمات پس از فروش هستند.
          </p>

          <div className="brands-section">
            <div className="brand-item">
              <div className="brand-icon">🍎</div>
              <h3>Apple</h3>
              <p>محصولات اپل با کیفیت بالا و طراحی منحصر به فرد</p>
            </div>
            <div className="brand-item">
              <div className="brand-icon">🖥️</div>
              <h3>Samsung</h3>
              <p>تکنولوژی پیشرفته و نوآوری در محصولات سامسونگ</p>
            </div>
            <div className="brand-item">
              <div className="brand-icon">💻</div>
              <h3>ASUS</h3>
              <p>لپتاپ‌ها و کامپیوترهای قدرتمند برای گیمرها</p>
            </div>
            <div className="brand-item">
              <div className="brand-icon">🎮</div>
              <h3>Lenovo</h3>
              <p>محصولات تجاری و شخصی با کیفیت عالی</p>
            </div>
            <div className="brand-item">
              <div className="brand-icon">🔊</div>
              <h3>Sony</h3>
              <p>صوت و تصویر با کیفیت حرفه‌ای</p>
            </div>
            <div className="brand-item">
              <div className="brand-icon">⌨️</div>
              <h3>Logitech</h3>
              <p>لوازم جانبی کامپیوتر با کیفیت بالا</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
