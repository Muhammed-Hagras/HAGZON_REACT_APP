import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { SliderProducts } from '../../data/products'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./Slider.css"
import { Navigation, Pagination } from 'swiper'

export default function Slider() {

  return (
    <div className="s-container">
      <Swiper 
       breakpoints={{
        640:{
            slidesPerView: 3
        },
        0:{
            slidesPerView: 1
        }
    }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      navigation={true}
      loopFillGroupWithBlank={true}
      slidesPerGroup={1}
      spaceBetween={40}
      slidesPerView={3}
      loop={true}
      >
        
        {SliderProducts.map((slide,i) => (
          <SwiperSlide key={i}>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div>Shop now</div>
            </div>
            <img src={slide.img} alt="Procduct" className='img-p'/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
