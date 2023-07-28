import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


const Footer = () => {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to="/productos" className="nav-link px-2 text-body-secondary">Productos</Link></li>
                    <li className="nav-item"><Link to="/productos/cafés" className="nav-link px-2 text-body-secondary">Cafés</Link></li>
                    <li className="nav-item"><Link to="/productos/jugos" className="nav-link px-2 text-body-secondary">Jugos</Link></li>
                    <li className="nav-item"><Link to="/nosotros" className="nav-link px-2 text-body-secondary">Nosotros</Link></li>
                    <li className="nav-item"><Link to="/contacto" className="nav-link px-2 text-body-secondary">Contacto</Link></li>
                </ul>
                <p className="text-center text-body-secondary">&copy; 2023 Company, Inc</p>
            </footer>
</div>
    )
}

export default Footer