import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
    <div className="container-carrito">

        {
            carrito.map((prod) => (
                <div className='descripcion-pedido' key={prod.id}>
                    <div><img className='img-prod-carrito' src={prod.imagen} alt="" /></div>
                    <br />
                    <h3>{prod.titulo}</h3>
                    <p>Precio unit: ${prod.precio}</p>
                    <p>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <div className='container-botones-carrito'>
                <h2>Precio total: ${precioTotal()}</h2>
                <button className='boton-vaciar' onClick={handleVaciar}>Vaciar</button>
                <Link className='boton-finalizar-compra' to="/checkout">Finalizar compra</Link>
            </div> :
            <h2 className='carrito-vacio'>El carrito está vacío :(</h2>
        }
        
    </div>
    )
}

export default Carrito