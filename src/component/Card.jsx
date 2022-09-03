import React from 'react'
import imagen from '../img/unsplash_6FDXGY9J6y4.png'

export const Card = () => {
  return (
    <a href="#" className="card">
      <div className="product-img">
        <img src={imagen} alt="imagen" />
      </div>
      <h3 className="product-name">Producto sdf</h3>
      <p className="product-price">$ 60</p>
      <span>Ver producto</span>
    </a>
  )
}
