"use client"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./LoginPage.css"

const LoginPage = ({ darkMode }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(isLogin ? "ورود موفقیت‌آمیز بود!" : "ثبت‌نام موفقیت‌آمیز بود!")
    navigate("/")
  }

  return (
    <div className={`login-page ${darkMode ? "dark-mode" : ""}`}>
      <div className="login-container">
        <div className="login-form-wrapper">
          <div className="form-header">
            <h2>{isLogin ? "ورود به حساب کاربری" : "ایجاد حساب کاربری"}</h2>
            <p>{isLogin ? "به فروشگاه TechShop خوش آمدید" : "عضو خانواده TechShop شوید"}</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">نام و نام خانوادگی</label>
                <div className="input-wrapper">
                  <span className="input-icon">👤</span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">ایمیل</label>
              <div className="input-wrapper">
                <span className="input-icon">📧</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="ایمیل خود را وارد کنید"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">رمز عبور</label>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="رمز عبور خود را وارد کنید"
                  required
                />
                <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword">تکرار رمز عبور</label>
                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="رمز عبور را مجدداً وارد کنید"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <button type="submit" className="submit-btn">
              {isLogin ? "ورود" : "ثبت‌نام"}
            </button>
          </form>

          <div className="form-footer">
            <p>
              {isLogin ? "حساب کاربری ندارید؟" : "قبلاً ثبت‌نام کرده‌اید؟"}
              <button type="button" className="toggle-form-btn" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "ثبت‌نام کنید" : "وارد شوید"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
