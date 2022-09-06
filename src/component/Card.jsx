import React from 'react'
import imagen from '../img/unsplash_6FDXGY9J6y4.png'
import { SvgZoomIn } from '../svg/SvgZoomIn'

export const Card = () => {
  return (
    <div className="card">
      <SvgZoomIn img={imagen}/>
      <a href="#" className="card-anchor">
        <div className="product-img">
          <img src={imagen} alt="imagen"/>
        </div>
        <h3 className="product-name">Producto sdf</h3>
        <p className="product-price">$ 60</p>
        <span>Ver producto</span>
      </a>
    </div>
  )
}
