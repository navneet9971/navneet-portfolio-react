import React from "react";
import "../../styles/Hero/Hero.css";

import reactLogo from "../../assets/images/react-logo.png";
import personImg from "../../assets/images/person-img.jpeg";
import htmlLogo from "../../assets/images/html-logo.png";
import cssLogo from "../../assets/images/css-logo.png";
import jsLogo from "../../assets/images/js-logo.png";

const Hero = () => {
    return(
        
        <section className="hero-container">
            <div className="hero-content">
                <h2>Building Digital Experiences That Inspire</h2>
                <p>
                    Passionate Frontend Developer | Transforming Ideas into Seamless and Responsive
                    Visually Stunning Web Solutions
                </p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                    <img src={reactLogo} alt="" />
                    </div>

                    <img src={personImg} alt="" />
                </div>

                <div>
                    <div className="tech-icon">
                        <img src={htmlLogo} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={cssLogo} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={jsLogo} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;