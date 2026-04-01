import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import car1 from "../../assets/images/car-1.jpg";
import car2 from "../../assets/images/car-2.jpg";
import car3 from "../../assets/images/car-3.jpg";
import car4 from "../../assets/images/car-4.jpg";
import car5 from "../../assets/images/car-5.jpg";
import cart1 from "../../assets/images/cart-1.jpg";
import cart2 from "../../assets/images/cart-2.jpg";
import cart3 from "../../assets/images/cart-3.jpg";
import cart4 from "../../assets/images/cart-4.jpg";
import cart5 from "../../assets/images/cart-5.jpg";

import "../css/BestProductSlider.css";

const BestProductSlider = () => {
  const slides = [
    {
      id: 1,
      image: car1,
      title: "Car 1",
      price: "$20,000",
      date: "2026-04-01",
    },
    {
      id: 2,
      image: car2,
      title: "Car 2",
      price: "$25,000",
      date: "2026-03-28",
    },
    {
      id: 3,
      image: car3,
      title: "Car 3",
      price: "$18,500",
      date: "2026-03-30",
    },
    {
      id: 4,
      image: car4,
      title: "Car 4",
      price: "$22,000",
      date: "2026-03-29",
    },
    {
      id: 5,
      image: car5,
      title: "Car 5",
      price: "$28,000",
      date: "2026-04-01",
    },
    {
      id: 6,
      image: cart1,
      title: "Cart 1",
      price: "$15,000",
      date: "2026-04-01",
    },
    {
      id: 7,
      image: cart2,
      title: "Cart 2",
      price: "$18,000",
      date: "2026-03-28",
    },
    {
      id: 8,
      image: cart3,
      title: "Cart 3",
      price: "$16,500",
      date: "2026-03-30",
    },
    {
      id: 9,
      image: cart4,
      title: "Cart 4",
      price: "$20,000",
      date: "2026-03-29",
    },
    {
      id: 10,
      image: cart5,
      title: "Cart 5",
      price: "$22,000",
      date: "2026-04-01",
    },
  ];

  return (
    <div className="best-slider-container my-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4} // پیش‌فرض دسکتاپ
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={slides.length > 4}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // موبایل
          640: { slidesPerView: 2, spaceBetween: 15 }, // تبلت کوچک
          1024: { slidesPerView: 3, spaceBetween: 20 }, // لپ‌تاپ کوچک
          1200: { slidesPerView: 4, spaceBetween: 20 }, // دسکتاپ بزرگ
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="card">
              <div className="card-image">
                <img src={slide.image} alt={slide.title} />
              </div>
              <div className="card-info">
                <h3>{slide.title}</h3>
                <p className="price">{slide.price}</p>
                <p className="date">{slide.date}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestProductSlider;
