import React from 'react';
import './EQCourses.css';


const EQCourses = ({title, description, bgvideo}) => {
    const handleEnquiryClick = () => {
        // Add logic to redirect to the Contact Section
        document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="eq-courses">
            <video autoPlay muted loop id="bg-video">
                <source src={bgvideo} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className="content">
                <h2>{title}</h2>
                <p> {description}
                    
                </p>
                <p className="coming-soon">Coming soon...</p>
                <button onClick={handleEnquiryClick}>Enquire Now ➜</button>
            </div>
        </section>
    );
}

export default EQCourses;
