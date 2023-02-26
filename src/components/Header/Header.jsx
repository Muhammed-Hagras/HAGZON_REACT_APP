import React, { useState } from 'react'
import css from  "./Header.module.css"

import Logo from "../../assets/logo.png"

import {CgShoppingBag, } from "react-icons/cg"
import {GoThreeBars} from "react-icons/go"


export default function Header() {

  const [showMenu, setshowMenu] = useState(true);

  const toggleMenu = () => {
    setshowMenu((showMenu)=>!showMenu);
    console.log("haha " + showMenu)
  }

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>Hagzon</span>
      </div>

      <div className={css.right}>

        <div className={css.bars} 
        onClick ={toggleMenu}
        >
          <GoThreeBars/>
        </div>

          <ul className={css.menu}
           style={{ display: showMenu? "inherit": "none"}}
           >
            <li>Colletions</li>
            <li>Brands</li>
            <li>News</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        <input type="text" className={css.search} placeholder="Search"/>

        <CgShoppingBag className={css.cart}/>
        
      </div>
    </div>
  )
}
