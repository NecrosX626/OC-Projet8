import {Link} from "react-router-dom"
import logo from "../assets/mainLogo.png"

function Header(){
    return(
        <header className="flexHorizontal">
            <img className="logoHeader" src={logo} alt="Logo"/>
            <nav className="flexHorizontal">
                {/* <Link className="navLink" to="/">Accueil</Link>
                <Link className="navLink" to="/about">A Propos</Link> */}
            </nav>
        </header>
    )
}
export default Header