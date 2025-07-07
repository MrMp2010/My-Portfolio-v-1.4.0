"use client"

import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import ScrollToTop from "./components-for-page1/ScrollToTop"
import Cart from "./components-for-page1/Cart"
import Navbar from "./components-for-page1/Navbar"
import Footer from "./components-for-page1/Footer"
import HomePage from "./pages-of-1/HomePage"
import ProductsPage from "./pages-of-1/ProductsPage"
import ProductDetailPage from "./pages-of-1/ProductDetailPage"
import LoginPage from "./pages-of-1/LoginPage"
import AboutPage from "./pages-of-1/AboutPage"
import ContactPage from "./pages-of-1/ContactPage"
import "./page1.css"

const Page1 = () => {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  // داده‌های محصولات (20 محصول)
  const products = [
    {
      id: 1,
      name: "لپتاپ ایسوس ROG",
      price: 35000000,
      image: "/placeholder.svg?height=200&width=200",
      category: "laptop",
      discount: 10,
      rating: 4.5,
      description: "لپتاپ گیمینگ با پردازنده قدرتمند و کارت گرافیک پیشرفته",
      specs: ["پردازنده Intel Core i7", "رم 16GB DDR4", "کارت گرافیک RTX 3060", "حافظه 512GB SSD"],
    },
    {
      id: 2,
      name: "لپتاپ لنوو Legion",
      price: 28000000,
      image: "/placeholder.svg?height=200&width=200",
      category: "laptop",
      discount: 0,
      rating: 4.2,
      description: "لپتاپ مخصوص بازی با صفحه نمایش با کیفیت و خنک‌کننده پیشرفته",
      specs: ["پردازنده AMD Ryzen 7", "رم 16GB DDR4", "کارت گرافیک GTX 1660Ti", "حافظه 1TB HDD + 256GB SSD"],
    },
    {
      id: 3,
      name: "گوشی سامسونگ S23",
      price: 18500000,
      image: "/s.jpg",
      category: "mobile",
      discount: 15,
      rating: 4.7,
      description: "گوشی هوشمند با دوربین فوق‌العاده و باتری با دوام",
      specs: ["صفحه نمایش 6.1 اینچ", "دوربین 50 مگاپیکسل", "باتری 3900 میلی آمپر", "حافظه 128GB"],
    },
    {
      id: 4,
      name: "گوشی آیفون 14 پرو",
      price: 42000000,
      image: "/placeholder.svg?height=200&width=200",
      category: "mobile",
      discount: 5,
      rating: 4.8,
      description: "گوشی هوشمند با پردازنده قدرتمند و دوربین حرفه‌ای",
      specs: ["صفحه نمایش 6.1 اینچ ProMotion", "دوربین 48 مگاپیکسل", "تراشه A16 Bionic", "حافظه 256GB"],
    },
    {
      id: 5,
      name: "هدفون بی‌سیم سونی",
      price: 4500000,
      image: "/placeholder.svg?height=200&width=200",
      category: "accessories",
      discount: 20,
      rating: 4.3,
      description: "هدفون بی‌سیم با کیفیت صدای فوق‌العاده و حذف نویز",
      specs: ["اتصال بلوتوث 5.0", "حذف نویز فعال", "باتری 30 ساعته", "مقاوم در برابر آب"],
    },
    {
      id: 6,
      name: "ساعت هوشمند اپل",
      price: 12000000,
      image: "/placeholder.svg?height=200&width=200",
      category: "accessories",
      discount: 0,
      rating: 4.6,
      description: "ساعت هوشمند با قابلیت‌های سلامتی و تناسب اندام",
      specs: ["صفحه نمایش Retina", "ضد آب", "سنسور ضربان قلب", "GPS داخلی"],
    },
    {
      id: 7,
      name: "تبلت سامسونگ Tab S8",
      price: 15800000,
      image: "/placeholder.svg?height=200&width=200",
      category: "tablet",
      discount: 8,
      rating: 4.4,
      description: "تبلت با صفحه نمایش بزرگ و قلم هوشمند برای طراحی",
      specs: ["صفحه نمایش 11 اینچ", "قلم S Pen", "رم 8GB", "حافظه 128GB"],
    },
    {
      id: 8,
      name: "آیپد پرو 2023",
      price: 22500000,
      image: "/placeholder.svg?height=200&width=200",
      category: "tablet",
      discount: 0,
      rating: 4.9,
      description: "تبلت حرفه‌ای با پردازنده قدرتمند و صفحه نمایش با کیفیت",
      specs: ["تراشه M2", "صفحه نمایش Liquid Retina", "قلم Apple Pencil", "حافظه 256GB"],
    },
    {
      id: 9,
      name: "لپتاپ HP Pavilion",
      price: 22000000,
      image: "/placeholder.svg?height=200&width=200",
      category: "laptop",
      discount: 12,
      rating: 4.1,
      description: "لپتاپ مناسب برای کار اداری و تحصیل",
      specs: ["پردازنده Intel Core i5", "رم 8GB DDR4", "کارت گرافیک Intel UHD", "حافظه 512GB SSD"],
    },
    {
      id: 10,
      name: "گوشی شیائومی Mi 13",
      price: 14500000,
      image: "/placeholder.svg?height=200&width=200",
      category: "mobile",
      discount: 18,
      rating: 4.4,
      description: "گوشی با عملکرد بالا و قیمت مناسب",
      specs: ["صفحه نمایش 6.36 اینچ", "دوربین 50 مگاپیکسل", "باتری 4500 میلی آمپر", "حافظه 256GB"],
    },
    {
      id: 11,
      name: "کیبورد مکانیکی لاجیتک",
      price: 3200000,
      image: "/placeholder.svg?height=200&width=200",
      category: "accessories",
      discount: 25,
      rating: 4.5,
      description: "کیبورد مکانیکی برای گیمرها و برنامه‌نویسان",
      specs: ["سوئیچ مکانیکی", "نور پس زمینه RGB", "اتصال USB-C", "ضد آب"],
    },
    {
      id: 12,
      name: "موس گیمینگ ریزر",
      price: 2800000,
      image: "/placeholder.svg?height=200&width=200",
      category: "accessories",
      discount: 15,
      rating: 4.3,
      description: "موس دقیق برای بازی‌های حرفه‌ای",
      specs: ["سنسور 16000 DPI", "نور پس زمینه", "7 دکمه قابل برنامه‌ریزی", "طراحی ارگونومیک"],
    },
    {
      id: 13,
      name: "تبلت آیپد ایر",
      price: 18900000,
      image: "/placeholder.svg?height=200&width=200",
      category: "tablet",
      discount: 7,
      rating: 4.6,
      description: "تبلت قدرتمند برای کار و سرگرمی",
      specs: ["تراشه M1", "صفحه نمایش 10.9 اینچ", "دوربین 12 مگاپیکسل", "حافظه 64GB"],
    },
    {
      id: 14,
      name: "لپتاپ مک بوک ایر",
      price: 45000000,
      image: "/placeholder.svg?height=200&width=200",
      category: "laptop",
      discount: 3,
      rating: 4.8,
      description: "لپتاپ سبک و قدرتمند اپل",
      specs: ["تراشه M2", "رم 8GB", "صفحه نمایش Retina", "حافظه 256GB SSD"],
    },
    {
      id: 15,
      name: "گوشی وان پلاس 11",
      price: 19800000,
      image: "/placeholder.svg?height=200&width=200",
      category: "mobile",
      discount: 10,
      rating: 4.5,
      description: "گوشی با شارژ سریع و عملکرد بالا",
      specs: ["صفحه نمایش 6.7 اینچ", "دوربین 50 مگاپیکسل", "شارژ سریع 100 وات", "حافظه 128GB"],
    },
    {
      id: 16,
      name: "اسپیکر بلوتوث JBL",
      price: 2500000,
      image: "/placeholder.svg?height=200&width=200",
      category: "accessories",
      discount: 30,
      rating: 4.2,
      description: "اسپیکر قابل حمل با صدای قدرتمند",
      specs: ["اتصال بلوتوث 5.1", "ضد آب IPX7", "باتری 12 ساعته", "صدای استریو"],
    },
    {
      id: 17,
      name: "وب کم لاجیتک",
      price: 1800000,
      image: "/placeholder.svg?height=200&width=200",
      category: "accessories",
      discount: 20,
      rating: 4.1,
      description: "وب کم با کیفیت HD برای جلسات آنلاین",
      specs: ["رزولوشن 1080p", "میکروفون داخلی", "فوکوس خودکار", "سازگار با همه سیستم‌ها"],
    },
    {
      id: 18,
      name: "تبلت هوآوی MatePad",
      price: 12500000,
      image: "/placeholder.svg?height=200&width=200",
      category: "tablet",
      discount: 15,
      rating: 4.0,
      description: "تبلت مناسب برای کار و تفریح",
      specs: ["صفحه نمایش 10.4 اینچ", "پردازنده Kirin 820", "رم 4GB", "حافظه 64GB"],
    },
    {
      id: 19,
      name: "لپتاپ دل Inspiron",
      price: 19500000,
      image: "/placeholder.svg?height=200&width=200",
      category: "laptop",
      discount: 8,
      rating: 4.2,
      description: "لپتاپ مناسب برای استفاده روزمره",
      specs: ["پردازنده Intel Core i3", "رم 8GB DDR4", "کارت گرافیک Intel UHD", "حافظه 256GB SSD"],
    },
    {
      id: 20,
      name: "گوشی گوگل Pixel 7",
      price: 21000000,
      image: "/placeholder.svg?height=200&width=200",
      category: "mobile",
      discount: 12,
      rating: 4.6,
      description: "گوشی با دوربین هوش مصنوعی و اندروید خالص",
      specs: ["صفحه نمایش 6.3 اینچ", "دوربین 50 مگاپیکسل", "تراشه Google Tensor", "حافظه 128GB"],
    },
  ]

  // افزودن محصول به سبد خرید
  const handleAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id)

    if (existingItemIndex >= 0) {
      const updatedCartItems = [...cartItems]
      updatedCartItems[existingItemIndex].quantity += 1
      setCartItems(updatedCartItems)
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }

    setShowCart(true)
  }

  // حذف محصول از سبد خرید
  const handleRemoveItem = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id)
    setCartItems(newCart)
  }

  // تغییر تعداد محصول در سبد خرید
  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem(id)
      return
    }

    const updatedCartItems = cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    setCartItems(updatedCartItems)
  }

  // تغییر حالت تاریک/روشن
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // اعمال کلاس حالت تاریک به body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [darkMode])

  return (
    <>
      <ScrollToTop />
      <div className={`page1-container ${darkMode ? "dark-mode" : ""}`}>
        <div className="page1-app-wrapper">
          <Navbar
            cartItems={cartItems}
            onSearch={setSearchQuery}
            searchQuery={searchQuery}
            darkMode={darkMode}
            onToggleDarkMode={toggleDarkMode}
            onShowCart={() => setShowCart(true)}
          />

          <main className="page1-main-content">
            <div className="page1-content-wrapper">
              <Routes>
                <Route
                  path="/"
                  element={
                    <HomePage
                      products={products}
                      onAddToCart={handleAddToCart}
                      darkMode={darkMode}
                      searchQuery={searchQuery}
                    />
                  }
                />
                <Route
                  path="/products"
                  element={
                    <ProductsPage
                      products={products}
                      onAddToCart={handleAddToCart}
                      darkMode={darkMode}
                      searchQuery={searchQuery}
                    />
                  }
                />
                <Route
                  path="/product/:id"
                  element={<ProductDetailPage products={products} onAddToCart={handleAddToCart} darkMode={darkMode} />}
                />
                <Route path="/login" element={<LoginPage darkMode={darkMode} />} />
                <Route path="/about" element={<AboutPage darkMode={darkMode} />} />
                <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
              </Routes>
            </div>
          </main>

          <Footer darkMode={darkMode} />

          {/* سبد خرید */}
          {showCart && (
            <div className="cart-overlay" onClick={() => setShowCart(false)}>
              <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
                <button className="close-cart" onClick={() => setShowCart(false)}>
                  ×
                </button>
                <Cart
                  cartItems={cartItems}
                  onRemoveItem={handleRemoveItem}
                  onUpdateQuantity={handleUpdateQuantity}
                  darkMode={darkMode}
                />
              </div>
            </div>
          )}

          {/* دکمه نمایش سبد خرید در موبایل */}
          <button className="floating-cart-btn" onClick={() => setShowCart(!showCart)}>
            🛒
            {cartItems.length > 0 && (
              <span className="floating-cart-counter">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  )
}

export default Page1
