"use client"
import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? "dark" : ""}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h3>دسترسی سریع</h3>
          <ul>
            <li>
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link to="/products">محصولات</Link>
            </li>
            <li>
              <Link to="/about">درباره ما</Link>
            </li>
            <li>
              <Link to="/contact">تماس با ما</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>خدمات مشتریان</h3>
          <ul>
            <li>
              <a href="#">سوالات متداول</a>
            </li>
            <li>
              <a href="#">راهنمای خرید</a>
            </li>
            <li>
              <a href="#">شرایط بازگشت کالا</a>
            </li>
            <li>
              <a href="#">حریم خصوصی</a>
            </li>
            <li>
              <a href="#">پشتیبانی</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>دسته‌بندی محصولات</h3>
          <ul>
            <li>
              <Link to="/products?category=laptop">لپتاپ</Link>
            </li>
            <li>
              <Link to="/products?category=mobile">موبایل</Link>
            </li>
            <li>
              <Link to="/products?category=tablet">تبلت</Link>
            </li>
            <li>
              <Link to="/products?category=accessories">لوازم جانبی</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>تماس با ما</h3>
          <p>
            <strong>آدرس:</strong> تهران، خیابان ولیعصر، پلاک 123
          </p>
          <p>
            <strong>تلفن:</strong> 021-12345678
          </p>
          <p>
            <strong>ایمیل:</strong> info@techshop.com
          </p>

          <div className="social-icons">
            <a href="#" className="social-icon">
              📷
            </a>
            <a href="#" className="social-icon">
              🐦
            </a>
            <a href="#" className="social-icon">
              💼
            </a>
            <a href="#" className="social-icon">
              📺
            </a>
          </div>
        </div>

        <div className="footer-section newsletter">
          <h3>عضویت در خبرنامه</h3>
          <p>برای اطلاع از آخرین محصولات و تخفیف‌ها در خبرنامه ما عضو شوید</p>
          <div className="newsletter-form">
            <input type="email" placeholder="ایمیل خود را وارد کنید" className={darkMode ? "dark" : ""} />
            <button className="subscribe-btn">عضویت</button>
          </div>
        </div>
      </div>

      <div className="payment-methods">
        <span>روش‌های پرداخت:</span>
        <div className="payment-icons">
          <div className="payment-icon">💳</div>
          <div className="payment-icon">💰</div>
          <div className="payment-icon">🏦</div>
          <div className="payment-icon">💵</div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© تمامی حقوق محفوظ است - فروشگاه دیجیتال TechShop 1402</p>
      </div>
    </footer>
  )
}

export default Footer
