import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './component/Footer'
import { NavBar } from './component/NavBar'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

const App = () => {
  localStorage.setItem('usr', 'leonardo')
  localStorage.setItem('jwt', 'alfajor')
  const MyLocalStorage = localStorage.getItem('usr')
  const MyLocalStorageJWT = localStorage.getItem('jwt')
  console.log(MyLocalStorage)
  console.log(MyLocalStorageJWT)

  return (
    <BrowserRouter basename='/ecommerce_oracle_one/'>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
