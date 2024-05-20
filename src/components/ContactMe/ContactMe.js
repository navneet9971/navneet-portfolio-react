import React from "react";
import "../../styles/ContactMe/ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";

import email from "../../assets/images/html-logo.png";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {

    return (
    <section className="contact-container" >
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{ flex: 1 }}>
                <ContactInfoCard 
                iconUrl={email}
                text= "Navneetjha2012@gmail.com"
                />
                 <ContactInfoCard 
                iconUrl={email}
                text= "https://github.com/link"
                />
            </div>

            <div style={{ flex: 1 }}>
<ContactForm />

            </div>
        </div>
    </section>
    )
} 

export default ContactMe;