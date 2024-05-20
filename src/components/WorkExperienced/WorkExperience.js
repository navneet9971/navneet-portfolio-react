import React, { useState } from "react";
import "../../styles/WorkExperienced/WorkExperience.css";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { Carousel } from 'react-responsive-carousel';

const WorkExperience = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handlePrevSlide = () => {
        setSelectedIndex((selectedIndex - 1 + WORK_EXPERIENCE.length) % WORK_EXPERIENCE.length);
    };

    const handleNextSlide = () => {
        setSelectedIndex((selectedIndex + 1) % WORK_EXPERIENCE.length);
    };

    return (
        <section className="experience-container">
            <h5>Work Experience</h5>

            <div className="experience-content">
                <div className="arrow-left" onClick={handlePrevSlide}>
                    <span className="material-symbols-outlined">chevron_left</span>
                </div>

                <div className="arrow-right" onClick={handleNextSlide}>
                    <span className="material-symbols-outlined">chevron_right</span>
                </div>

                <Carousel
                    selectedItem={selectedIndex}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    swipeable={true}
                    emulateTouch={true}
                    renderThumbs={() => { }}
                    slidesToShow={2}
                    slidesToScroll={1}
                    thumbWidth={100}
                >
                    {WORK_EXPERIENCE.map((item) => (
                        <ExperienceCard key={item.title} details={item} />
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default WorkExperience;
