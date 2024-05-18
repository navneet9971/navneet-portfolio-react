import React, { useState } from 'react';
import "../../styles/Skills/Skills.css";
import SkillCard from './SkillCard/SkillCard';
import { SKILLS } from '../../utils/data';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

const handleSelectSkill = (data) => {
    setSelectedSkill(data);
}

console.log(SKILLS)

    return(
        <section className="skills-container">
            <h5>Technical Proficiency</h5>

                <div className="skills-content">
                    <div className='skills'>
                        {SKILLS.map((item) => (
                        <SkillCard
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}
                        isActive={selectedSkill.title === item.title}
                        onClick={() => {
                            handleSelectSkill(item);
                        }}
                        />
                    ))}
                    </div>

                    <div className='skills-info'>
                        <SkillsInfoCard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                        />
                    </div>
                </div>
        
        </section>
    )
}

export default Skills;
