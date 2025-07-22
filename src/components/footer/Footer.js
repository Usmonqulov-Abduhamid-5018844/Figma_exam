import "./Footer.scss";
import footer_logo from "../../assets/footer_logo.svg"
import { CiMail } from "react-icons/ci";
import { FiPhoneIncoming } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";

import { TbBrandTwitter } from "react-icons/tb";
import { CiYoutube } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";











const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
          <div className="footer__wrapper">
            <div className="footer_items_L">
              <img src={footer_logo} alt="" />
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
              <a href="#"><CiMail/> Company@gmail.com.com</a><br />
              <a href="tel:(064) 332-1233"><FiPhoneIncoming/> Phone: (064) 332-1233</a><br />
              <a href="#"><FaLocationDot/> 450 Wall Street, USA, New York</a>
            </div>

            <div className="footer_items">
                <span>INFORMATION</span>
                <ul>
                  <li>
                    <a href="#">New Collection</a>
                  </li>
                  <li>
                    <a href="#">About Store</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Latest News</a>
                  </li>
                  <li>
                    <a href="#">Our Sitemap</a>
                  </li>
                  <li>
                    <a href="#">Orders History</a>
                  </li>
                </ul>
            </div>
            <div className="footer_items">
                <span>FOOTER MENU</span>
                <ul>
                  <li>
                    <a href="#">Instagram profile</a>
                  </li>
                  <li>
                    <a href="#">New Collection</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Latest News</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Purchase Theme</a>
                  </li>
                </ul>
            </div>
            <div className="footer_items">
                <span>USEFUL LINKS</span>
                <ul>
                  <li>
                    <a href="#">Instagram profile</a>
                  </li>
                  <li>
                    <a href="#">New Collection</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Latest News</a>
                  </li>
                  <li>
                    <a href="#">Our Sitemap</a>
                  </li>
                  <li>
                    <a href="#">Orders History</a>
                  </li>
                </ul>
            </div>
            <div className="footer_items_M">
                <span>ABOUT THE STORE</span>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
                <a href="#">www.company.com</a>
                <div className="footer__items__icon">
                  <i><LuFacebook/></i>
                  <i><FaInstagram/></i>
                  <i><TbBrandTwitter/></i>
                  <i><FaLinkedinIn/></i>
                  <i><CiYoutube/></i>
                </div>
                <span><CiGlobe/> English v</span>
                
            </div>

          </div>
      </div>
    </div>
  )
}

export default Footer
