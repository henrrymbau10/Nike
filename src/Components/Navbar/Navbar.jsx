// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.scss'
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai';
import Logo from '../../../public/Assets/Icons/Nike-Logo.svg'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__logo">
          <img src={Logo} alt="Nike-Logo" />
        </div>
        <div className="navbar__container__list">
          <li>Novedades</li>
          <li>Hombre</li>
          <li>Mujer</li>
          <li>Nino/a</li>
        </div>
        <div className="navbar__container__search">
          <FiSearch />
          <input type="text" placeholder='Buscar' />
        </div>
        <div className="navbar__container__icons">
          <AiOutlineHeart />
          <AiOutlineShopping />
        </div>
      </div>
    </div>
  )
}
