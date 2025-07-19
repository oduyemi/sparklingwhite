"use client";
import Image from "next/image";
import React from "react";
import "./About.css"; 

export const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-row">
          <div className="about-image-wrapper">
            <Image
              src="/images/abthome.jpg"
              alt="10 Years Experience"
              width={600}
              height={600}
              className="about-image"
              priority
            />
          </div>

          <div className="about-content">
            <h2 className="about-heading">
              <span className="about-years">10</span> Years Experience
            </h2>
            <p className="about-paragraph">
              We specialize in delivering reliable and cutting-edge solutions for modern businesses. Our decade of experience ensures your goals are met with expertise and precision.
            </p>
            <p className="about-paragraph">
              Whether you're a startup or an enterprise, our team brings strategic insight and technical mastery to your project—maximizing results with minimum friction.
            </p>
            <a href="#" className="about-btn">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};
