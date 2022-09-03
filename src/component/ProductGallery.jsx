import React from 'react'
import { Card } from './Card'
import ArrowRight from '../svg/ArrowRight'

export const ProductGallery = ({ nameOfCategory = 'all' }) => {
  return (
    <section className='ProductGallery'>
      <div className="content">
        <header>
          <h2>{nameOfCategory}</h2>
          <a href="#">
            <span>Ver todo</span>
            <ArrowRight fill='#2A7AE4' />
          </a>
        </header>

        <main className="product-line">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </main>
      </div>
    </section>
  )
}
