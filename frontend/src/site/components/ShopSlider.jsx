// ===============================
// 1. ایمپورت‌های اصلی Swiper
// ===============================
import { Swiper, SwiperSlide } from "swiper/react";

// ماژول‌ها
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import images
import car1 from "../../assets/images/car-1.jpg";
import car2 from "../../assets/images/car-2.jpg";
import car3 from "../../assets/images/car-3.jpg";
import car4 from "../../assets/images/car-4.jpg";
import car5 from "../../assets/images/car-5.jpg";

// ===============================
// 2. CSS
// ===============================
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../css/ShopSlider.css";
// ===============================
// 3. کامپوننت
// ===============================
const ShopSlider = () => {
  // داده‌ها
  const slides = [
    { id: 1, title: "Slide 1", image: car1 },
    { id: 2, title: "Slide 2", image: car2 },
    { id: 3, title: "Slide 3", image: car3 },
    { id: 4, title: "Slide 4", image: car4 },
    { id: 5, title: "Slide 5", image: car5 },
  ];
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        // autoplay بهتر تنظیم شده
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // loop فقط اگر اسلاید کافی باشد
        loop={slides.length > 3}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide">
              <img
                src={slide.image}
                alt={slide.title}
                className="slide-image"
              />

              <div className="slide-title">
                <h6>{slide.title}</h6>
                <p>mehdiahmadi@gmail.com</p>
                <p>Takhar</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShopSlider;
