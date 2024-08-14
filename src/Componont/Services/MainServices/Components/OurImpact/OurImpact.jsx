import React, { useEffect, useRef } from 'react';
import './OurImpact.css'; // Assuming you save the CSS in a file named OurImpact.css
import ourimpactvideo from './../../../../../assets/Services/ourimpact1.mp4'; // Replace with the actual path to the video

const OurImpact = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = document.querySelectorAll('.impact-number');
          counters.forEach((counter) => {
            const updateCount = () => {
              const target = +counter.getAttribute('data-target');
              const count = +counter.innerText.replace('+', '');

              const speed = 200; // Adjust speed here
              const increment = target / speed;

              if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}+`;
                setTimeout(updateCount, 30); // Adjust the interval speed here
              } else {
                counter.innerText = `${target}+`;
              }
            };

            updateCount();
          });

          observer.unobserve(statsRef.current);
        }
      });
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section className="impact-section">
      <video className='ourimpact-video' autoPlay loop muted>
        <source src={ourimpactvideo} type='video/mp4' />
      </video>
      <div className="impact-inner" ref={statsRef}>
        <h2>Our Impact</h2>
        <p>
          Every innovation we pursue stems from our drive to enhance our existing capabilities. We generate impactful ideas, craft transformative experiences, and develop ecosystems that promote advancement and growth.
        </p>
        <div className="impact-stats">
          <div className="impact-stat">
            <div className="impact-number" data-target="100">0+</div>
            <div className="impact-text">Projects Launched</div>
          </div>
          <div className="impact-stat">
            <div className="impact-number" data-target="500">0+</div>
            <div className="impact-text">Daily Customer Engagement</div>
          </div>
          <div className="impact-stat">
            <div className="impact-number" data-target="50">0+</div>
            <div className="impact-text">Digital Transformation Stories</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
