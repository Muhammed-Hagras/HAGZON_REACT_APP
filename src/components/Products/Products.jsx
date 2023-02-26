import React, { useState } from 'react'
import css from "./products.module.css"
import plane from "../../assets/plane.png"
import { ProductsData } from '../../data/products'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function Products() {
    const [MenuProducts, setMenuProducts] = useState(ProductsData)
    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product)=>product.type === type))
    }

    const [parent] = useAutoAnimate(/* optional config */)
  return (
    <div className={css.container}>
        <img src={plane} alt="" />
        <h1>Our Featured Products</h1>

        <div className={css.products}>
            <ul className={css.menu}>
                <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
                <li onClick={()=>filter("skin care")}>Skin Care</li>
                <li onClick={()=>filter("conditioner")}>Conditioners</li>
                <li onClick={()=>filter("foundation")}>Foundations</li>
            </ul>
            <div className={css.list} ref={parent}>
                {MenuProducts.map((product, i)=> 
                (
                    <div className={css.product} key={i}>
                        <div className="left-s">
                            <div className="name">
                                <span>{product.name}</span>
                                <span>{product.details}</span>
                                <div>Shop Now</div>
                            </div>
                        </div>
                        <img src={product.img} alt="" className='img-p'/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
