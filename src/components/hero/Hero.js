import "./Hero.scss"
import hero_1 from "../../assets/hero_1.svg"
import hero_2 from "../../assets/hero_2.svg"
import hero_3 from "../../assets/hero_3.svg"
import hero_4 from "../../assets/hero_4.svg"
import rero_img from "../../assets/9 1.png"
import poligon from "../../assets/Polygon 1.svg"

const Hero = () => {
  return (
    <div className="hero">
        <div className="container hero__wrapper">
            <div className="hero__title">
                <p>Next genaretion platform</p>
                <h1>Artificial intelligence & Syber security</h1>
                <p className="hero__desc">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            <div className="buttons">
                <button>Get Started</button>
                <button className="hero_button_img">
                    <img src={poligon} alt="" /> Watch Video</button>
            </div>
            </div>
            <div className="hero__image">
                <img src={rero_img} alt="" />
            </div>
        </div>
        <div className="container hero__icons">
            <a href="#">
                <img src={hero_1} alt="" />
            </a>
            <a href="#">
                <img src={hero_2} alt="" />
            </a>
            <a href="#">
                <img src={hero_3} alt="" />
            </a>
            <a href="#">
                <img src={hero_4} alt="" />
            </a>
         
        </div>
    </div>
  )
}

export default Hero
