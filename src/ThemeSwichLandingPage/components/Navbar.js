
import logo from "../imgs/Logo.svg"
import "../styles/toggler.scss"
import "../styles/navbar.scss"
const Navbar = () =>{
    return (
        <nav>
            <img cl src={logo}/>
            <ul className="navs">
                <li className="navLinks">Home</li>
                <li className="navLinks">Explore</li>
                <li className="navLinks">Contact Us</li>
            </ul>
            {/* Toggler */}
            <div className="toggler">
                <input type="checkbox" className="checkbox" id="checkbox"/>
                <label htmlFor="checkbox" className="checkbox-label">
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-sun"></i>
                    <span className="ball"></span>
                </label>
            </div>  
            <div className="srch-cart-icon">
                <span className="material-icons">search</span>
                <span className="material-icons">shopping_cart</span>
            </div>
            <button className="loginBtn">Login</button>
        </nav>
    )
}

export default Navbar