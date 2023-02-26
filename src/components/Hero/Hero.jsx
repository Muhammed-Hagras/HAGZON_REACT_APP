import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import {motion} from "framer-motion"

export default function Hero() { 
  const transition = {duration: 3, type: "spring"}
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream</span>
        <div className={css.text2}>
          <span>Trendy Collectins</span>
          <span>
            seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>
      </div>

      {/* middle side */}
      <div className={css.wrapper}>
        <motion.div 
        initial= {{bottom:"2rem"}}
        whileInView={{bottom:"0rem"}}
        transition={transition}
        className={css.blueCircle}></motion.div>

        <motion.img 
         initial= {{bottom:"-2rem"}}
         whileInView={{bottom:"0rem"}}
         transition={transition}
        src={HeroImg} alt="/" width={600} />
        <div className={css.cart2}>
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>

          </div>
        </div>
      </div>

      {/* right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>100K</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
}
