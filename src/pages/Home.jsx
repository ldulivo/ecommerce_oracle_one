import React from 'react'
import { ProductGallery } from '../component/ProductGallery'
import { SelectedDiscountProducts } from '../component/SelectedDiscountProducts'

export const Home = () => {
  return (
    <main className="Home">
      <SelectedDiscountProducts />
      <ProductGallery
        nameOfCategory={'Consolas'}/>
      <ProductGallery
        nameOfCategory={'Audio'}/>
      <ProductGallery
        nameOfCategory={'TV'}/>
      <ProductGallery
        nameOfCategory={'Varios'}/>
    </main>
  )
}
