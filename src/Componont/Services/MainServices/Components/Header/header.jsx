import React from 'react';
import './header.css'; // Make sure the path is correct

const ServiceHeader = ({ video_link }) => {
    return (
        <div className="service-header">
            <video className="service-header-video" autoPlay loop muted>
                <source src={video_link} type="video/mp4" />
            </video>
        </div>
    );
};

export default ServiceHeader;
