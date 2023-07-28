import React, { useEffect } from 'react'
import logo from "./logo/logo.png"

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container">
        <div className='d-flex justify-content-center'><img className='img-nosotros' src={logo} alt="" /></div>
        <p className='p-nosotros'>Esta pagina está hecha con mucho amor y facilidad para ulitizarla adecuadamente, somo VIBRA COFFE SHOP; vendemos café y jugos a eleccion, todo natural, nada procesado por industrias agenas</p>
    </div>
  )
}

export default Nosotros