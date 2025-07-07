"use client"
import { useState } from "react"
import "./ContactPage.css"

const ContactPage = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("پیام شما با موفقیت ارسال شد!")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className={`contact-page ${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <div className="page-header">
          <h1>تماس با ما</h1>
          <p>ما همیشه آماده پاسخگویی به سوالات شما هستیم</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>اطلاعات تماس</h2>

            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h3>تلفن</h3>
                <p>021-12345678</p>
                <p>09123456789</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h3>ایمیل</h3>
                <p>info@techshop.com</p>
                <p>support@techshop.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h3>آدرس</h3>
                <p>تهران، خیابان ولیعصر، پلاک 123</p>
                <p>طبقه 5، واحد 10</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">🕒</span>
              <div>
                <h3>ساعات کاری</h3>
                <p>شنبه تا چهارشنبه: 9:00 - 18:00</p>
                <p>پنج‌شنبه: 9:00 - 14:00</p>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>پیام خود را ارسال کنید</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="نام خود را وارد کنید"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">ایمیل</label>
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
                <label htmlFor="subject">موضوع</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="موضوع پیام خود را وارد کنید"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">پیام</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="پیام خود را اینجا بنویسید..."
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                📤 ارسال پیام
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
