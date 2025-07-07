"use client"
import { useState } from "react"
import Product from "../components-for-page1/Product"
import "./HomePage.css"

const HomePage = ({ products, onAddToCart, darkMode, searchQuery }) => {
  const [activeCategory, setActiveCategory] = useState("all")

  // فیلتر محصولات برای نمایش در صفحه اصلی (فقط 8 محصول اول)
  const featuredProducts = products
    .slice(0, 8)
    .filter((product) => activeCategory === "all" || product.category === activeCategory)
    .filter(
      (product) =>
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )

  return (
    <div className={`homepage ${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        {/* بنر اصلی */}
        <div className="main-banner">
          <div className="banner-content">
            <h1>فروشگاه محصولات دیجیتال</h1>
            <p>بهترین محصولات با بهترین قیمت‌ها در دسترس شما</p>
            <button className="shop-now-btn">همین حالا خرید کنید</button>
          </div>
        </div>

        {/* دسته‌بندی محصولات */}
        <div className="category-filter">
          <button
            className={`category-btn ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            همه محصولات
          </button>
          <button
            className={`category-btn ${activeCategory === "laptop" ? "active" : ""}`}
            onClick={() => setActiveCategory("laptop")}
          >
            لپتاپ
          </button>
          <button
            className={`category-btn ${activeCategory === "mobile" ? "active" : ""}`}
            onClick={() => setActiveCategory("mobile")}
          >
            موبایل
          </button>
          <button
            className={`category-btn ${activeCategory === "tablet" ? "active" : ""}`}
            onClick={() => setActiveCategory("tablet")}
          >
            تبلت
          </button>
          <button
            className={`category-btn ${activeCategory === "accessories" ? "active" : ""}`}
            onClick={() => setActiveCategory("accessories")}
          >
            لوازم جانبی
          </button>
        </div>

        {/* محصولات ویژه */}
        <div className="products-section">
          <h2>محصولات ویژه و پرفروش</h2>
          {featuredProducts.length === 0 ? (
            <div className="no-products">
              <p>محصولی یافت نشد!</p>
            </div>
          ) : (
            <div className="products-grid">
              {featuredProducts.map((product) => (
                <Product key={product.id} product={product} onAddToCart={onAddToCart} darkMode={darkMode} />
              ))}
            </div>
          )}
        </div>

        {/* بخش آمار */}
        <div className="additional-content">
          <div className="stats-section">
            <div className="stat-item">
              <div className="stat-number">10000+</div>
              <div className="stat-label">محصول متنوع</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50000+</div>
              <div className="stat-label">مشتری راضی</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">پشتیبانی</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">سال تجربه</div>
            </div>
          </div>
        </div>

        {/* بخش اضافی برای طول بیشتر */}
        <div className="extra-content">
          <h2>چرا TechShop را انتخاب کنید؟</h2>
          <p>
            ما با بیش از 5 سال تجربه در زمینه فروش محصولات دیجیتال، بهترین کیفیت و خدمات را به شما ارائه می‌دهیم. تیم
            متخصص ما همیشه آماده پاسخگویی به سوالات شما است و تضمین می‌کنیم که بهترین تجربه خرید را داشته باشید. ما
            همچنین با برندهای معتبر جهانی همکاری داریم تا اطمینان حاصل کنیم که محصولات ارائه شده کاملاً اصل و با کیفیت
            هستند. تیم پشتیبانی ما 24 ساعته در خدمت شما است و همیشه آماده کمک و راهنمایی هستیم.
          </p>
        </div>

        {/* بخش ویژگی‌های فروشگاه */}
        <div className="features-section">
          <div className="feature">
            <div className="feature-icon">🚚</div>
            <h3>ارسال رایگان</h3>
            <p>برای سفارش‌های بالای 500 هزار تومان ارسال کاملاً رایگان در سراسر کشور</p>
          </div>
          <div className="feature">
            <div className="feature-icon">⏱️</div>
            <h3>تحویل سریع</h3>
            <p>ارسال در کمتر از 24 ساعت در تهران و 48 ساعت در سایر شهرهای کشور</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💰</div>
            <h3>ضمانت بازگشت وجه</h3>
            <p>7 روز ضمانت بازگشت کالا و وجه بدون هیچ شرط و دردسری</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔒</div>
            <h3>پرداخت امن</h3>
            <p>درگاه پرداخت امن و معتبر با رمزنگاری پیشرفته و حفاظت کامل</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🎯</div>
            <h3>کیفیت تضمینی</h3>
            <p>تمام محصولات اصل و با گارانتی معتبر شرکت و خدمات پس از فروش</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📞</div>
            <h3>پشتیبانی 24/7</h3>
            <p>تیم پشتیبانی ما همیشه در خدمت شما عزیزان است و آماده پاسخگویی</p>
          </div>
        </div>

        {/* بخش محتوای طولانی */}
        <div className="long-content-section">
          <h2>خدمات ویژه TechShop</h2>
          <div className="content-grid">
            <div className="content-item">
              <h3>مشاوره تخصصی</h3>
              <p>
                تیم متخصص ما آماده ارائه مشاوره رایگان برای انتخاب بهترین محصول متناسب با نیاز شما است. با تجربه چندین
                ساله در این حوزه، ما بهترین راهنمایی را ارائه می‌دهیم.
              </p>
            </div>
            <div className="content-item">
              <h3>نصب و راه‌اندازی</h3>
              <p>
                خدمات نصب و راه‌اندازی محصولات توسط تکنسین‌های مجرب ما. از نصب سیستم‌عامل تا تنظیمات پیشرفته، همه چیز را به
                ما بسپارید.
              </p>
            </div>
            <div className="content-item">
              <h3>گارانتی معتبر</h3>
              <p>
                تمام محصولات ما دارای گارانتی معتبر شرکتی هستند. در صورت بروز هر مشکل، تیم پشتیبانی ما آماده خدمت‌رسانی
                است.
              </p>
            </div>
            <div className="content-item">
              <h3>آموزش کاربری</h3>
              <p>
                ویدیوهای آموزشی رایگان برای استفاده بهینه از محصولات خریداری شده. همچنین امکان مشاوره تلفنی برای حل
                مشکلات فنی.
              </p>
            </div>
          </div>
        </div>

        {/* بخش نظرات مشتریان */}
        <div className="testimonials-section">
          <h2>نظرات مشتریان عزیز</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p>
                "خرید از TechShop تجربه فوق‌العاده‌ای بود. کیفیت محصولات عالی و ارسال بسیار سریع. حتماً دوباره خرید خواهم
                کرد. پشتیبانی عالی و قیمت‌های مناسب."
              </p>
              <div className="author">- علی احمدی، مهندس نرم‌افزار</div>
            </div>
            <div className="testimonial">
              <p>
                "پشتیبانی بسیار خوب و قیمت‌های مناسب. لپتاپی که خریدم کاملاً مطابق انتظارم بود و با بسته‌بندی عالی رسید.
                خدمات پس از فروش هم عالی بود."
              </p>
              <div className="author">- مریم کریمی، طراح گرافیک</div>
            </div>
            <div className="testimonial">
              <p>
                "بهترین فروشگاه آنلاین برای خرید محصولات دیجیتال. تنوع محصولات زیاد و همه چیز اصل و با گارانتی معتبر.
                سایت کاربرپسند و فرآیند خرید آسان."
              </p>
              <div className="author">- حسین رضایی، دانشجو</div>
            </div>
          </div>
        </div>

        {/* بخش نهایی طولانی */}
        <div className="very-long-section">
          <h2>همین حالا عضو خانواده TechShop شوید!</h2>
          <p>
            با عضویت در خبرنامه ما از آخرین محصولات، تخفیف‌های ویژه و اخبار تکنولوژی مطلع شوید. ما متعهد هستیم که بهترین
            تجربه خرید آنلاین را برای شما فراهم کنیم. با بیش از 50000 مشتری راضی، ما افتخار داریم که در خدمت شما باشیم.
            تیم ما شبانه‌روز در تلاش است تا بهترین محصولات را با مناسب‌ترین قیمت‌ها در اختیار شما قرار دهد.
          </p>
          <button className="cta-button">عضویت در خبرنامه</button>
        </div>

        {/* بخش آخر برای طول کامل */}
        <div className="final-section">
          <h2>آماده شروع خرید هستید؟</h2>
          <p>
            با بیش از 10000 محصول متنوع و کیفیت بالا، ما آماده ارائه بهترین خدمات به شما هستیم. همین حالا شروع کنید و از
            تخفیف‌های ویژه بهره‌مند شوید. تیم پشتیبانی ما 24 ساعته آماده پاسخگویی به سوالات شما است.
          </p>
          <button className="cta-button">مشاهده تمام محصولات</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
