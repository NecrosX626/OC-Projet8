import logo from "../assets/footerLogo.png"

function Footer(){
    return(
        <footer className="flexVertical">
            <img className="logoFooter" src={logo} alt="Logo"/>
            <p>
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}
export default Footer