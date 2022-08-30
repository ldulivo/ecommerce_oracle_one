import React from 'react'
import { useLocation } from 'react-router-dom'
import SearchSVG from '../svg/SearchSVG'
import Logo from './../img/Logo.png'

const BtnLogin = (pathname) => {
  if (pathname === '/') {
    return (
          <li className='NavBar--btn'>
            <button>Login</button>
          </li>
    )
  }
}

export const NavBar = () => {
  const { pathname } = useLocation()

  return (
    <div className="NavBar">
      <ul className="NavBar--content">
        <li className='NavBar--branch'>
          <img src={Logo} alt="Alura Geek" />
          <div className="NavBar--search">
            <input type="text" placeholder='¿Qué deseas buscar?' />
            <SearchSVG />
          </div>
        </li>
        {BtnLogin(pathname)}
      </ul>
    </div>
  )
}
