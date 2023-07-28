import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import logo from "./logo/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar container-fluid">
        <Link to="/" className="logo"><img className='logo-img' src={logo}/></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/cafés">Cafés</Link></li>
            <li><Link className="menu-link" to="/productos/jugos">Jugos</Link></li>
            <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar