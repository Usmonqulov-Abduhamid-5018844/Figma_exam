import "./About.scss"
import about_img from "../../assets/about3 1.png"


const About = () => {
    return (
        <div className="about">
            <div className="container about__wrapper">
                <div className="about__desc">
                <span>What our clients say about our awesome solutions</span>
                <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.</p>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .</p>
                <p>Lorem ipsum is placeholder previewing layouts and visual mockups.</p>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                </div>
                <div className="about__image">
                <img src={about_img} alt="" />

                </div>
            </div>
        </div>
    )
}

export default About