import React from 'react'
import css from "./testimonials.module.css"
import Hero from "../../assets/hero.png"
import { Swiper, SwiperSlide } from 'swiper/react'
import {TestimonialsData} from "../../data/testimonials"
import "swiper/css"

export default function Testimonials() {
    console.log(TestimonialsData)
  return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>

            <div className={css.container}>
                <span>Top Rated</span>
                <span>seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</span>
            </div>

            <img src={Hero} alt="" className='hero-img'/>

            <div className={css.container}>
                <span>100K</span>
                <span>Happy Customers with us</span>
            </div>
        </div>

        <div className={css.reviews}>Reviews</div>

        <div className={css.carousel}>
            <Swiper
            slidesPerGroup={1}
            slidesPerView={3}
            spaceBetween={20}
            className={css.tcarousel}
            breakpoints={{
                856:{
                    slidesPerView: 3
                },
                640:{
                    slidesPerView: 2
                },
                0:{
                    slidesPerView: 1
                }
            }}
            >
                {
                    TestimonialsData.map((test,i)=> (
                        <SwiperSlide key={i}>
                            <div className={css.testimonial}>
                                <img src={test.image} alt="" />
                                <span>{test.comment}</span>
                                <hr/>
                                <span>{test.name}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    </div>
  )
}
