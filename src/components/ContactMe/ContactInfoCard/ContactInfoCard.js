import React from "react";
import "../../../styles/ContactMe/ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text }) => {

    return (
      <div className="contact-details-card">
        <div className="icon">
            <img src={iconUrl} alt="" />
        </div>

        <p>{text}</p>
      </div>
    )
}

export default ContactInfoCard;