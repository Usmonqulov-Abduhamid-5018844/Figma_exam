import "./Header.scss"
import icon from "../../assets/Navber_logo.svg";
import { FaBars } from "react-icons/fa";

const Header = () => {
    return <div className="header">
        <div className="container header__navbar">
            <div className="navbar__icon">
                <img src={icon} alt="" />
            </div>
            <div className="navbar__collection">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Service</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <i><FaBars/></i>
            </div>
            <a href="#"><button>Sign in</button></a>
        </div>
        </div>
}

export default Header