import React from 'react'
import css from "./Virtual.module.css"
import shade from "../../assets/shade.png"
import ReactComapareImage from "react-compare-image"
import Before from "../../assets/before.png"
import After from "../../assets/after.png"

export default function Virtual() {
  return (
    <div className={css.virtual}>
        <div className={css.left}>
            <span>Virtual Try-on</span>
            <span>Never Buy wrong Shade Again!</span>
            <span>Try Now!</span>
            <img src={shade} alt="" />
        </div>
        <div className={css.right}>
            <div className={css.wrapper}>
                <ReactComapareImage leftImage={Before} rightImage={After}/>
            </div>
        </div>
    </div>
  )
}
