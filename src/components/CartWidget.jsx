import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import cart from "./carrito/carrito.svg"

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
        <Link className="menu-link" to="/carrito">
            <img src={cart} alt="carrito" />
            <span className="numerito"> {cantidadEnCarrito()}</span>
        </Link>
    </div>
  )
}

export default CartWidget