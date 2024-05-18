import React from "react";
import "../../../styles/Skills/SkillsInfoCard.css";

const SkillsInfoCard = ({ heading, skills }) => {

    return(
        <div className ="skills-info-card">
            <h6>{heading}</h6>

            <div className= "skills-info-contents">
                {skills.map((item, index) => (
                    <React.Fragment key={`skill_${index}`}>
                        <div className="skill-info">
                            <p>{item.skill}</p>
                            <p className="percentage"> {item.percentage} </p>
                        </div>

                        <div className= "skill-progress-bg">
                            <div className="skill-progress" style={{ width: item.percentage }} />
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default SkillsInfoCard;