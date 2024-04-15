
import logo from "../imgs/Logo.svg"
import "../styles/toggler.scss"
import "../styles/navbar.scss"
import { useContext } from "react"
import { ThemeContext } from ".."
const Navbar = () =>{
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () =>{
          // theme === "dark" ? setTheme("light") : setTheme("dark");
          setTheme(prev => prev === "light" ? "dark" : "light");
    }
    const themeClassName = theme === 'dark' ? 'dark' : '';

    return (
        <nav className={themeClassName}>
            <span className="material-icons menuBtn">menu</span>
            <img className="logo" src={logo} alt="logo"/>
            <ul className="navs">
                
                <li className="navLinks">Home</li>
                <li className="navLinks">Explore</li>
                <li className="navLinks">Contact Us</li>
            </ul>
            
            <div className={`rightNavs`}>
            <div className={`srch-cart-icon ${themeClassName}`}>
                <span className="material-icons search">search</span>
                <span className="material-icons cart">shopping_cart</span>
            </div>
            <button className="loginBtn">Login</button>

            {/* Toggler */}
            <div className="toggler" >
                <input type="checkbox" className="checkbox" id="checkbox"/>
                <label  onClick={changeTheme}  htmlFor="checkbox" className="checkbox-label">
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-sun"></i>
                    <span className="ball"></span>
                </label>
            </div>  
            </div>
        </nav>
    )
}

export default Navbar