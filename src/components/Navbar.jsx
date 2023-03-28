import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-danger">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/" class="nav-link active">🏠Home</Link>
                            <Link to="/contacto" class="nav-link active">📙Contacto</Link>
                            <p className="navbar-text">Happy Cake 🍰</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;