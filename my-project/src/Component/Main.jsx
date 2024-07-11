import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import slide1 from "./images/image-product-1.jpg"
import slide2 from "./images/image-product-2.jpg"
import slide3 from "./images/image-product-3.jpg"
import slide4 from "./images/image-product-4.jpg"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Main = () => {
  return (
    <div className='md:w-[45%]'>
          <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
     spaceBetween={50}
     slidesPerView={1}
     navigation
     pagination={{ clickable: true }}
     scrollbar={{ draggable: true }}
      
    >
      <SwiperSlide><img src={slide1}/></SwiperSlide>
      <SwiperSlide><img src={slide2}/></SwiperSlide>
      <SwiperSlide><img src={slide3}/></SwiperSlide>
      <SwiperSlide><img src={slide4}/></SwiperSlide>
      
    </Swiper>
        

    </div>
  )
}

export default Main