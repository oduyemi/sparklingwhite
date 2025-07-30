"use client";
import Image from "next/image";
import React from "react";

export const AboutHome: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Grid Layout */}
        <div className="about-grid">
          {/* Image */}
          <div className="about-image-block">
            <div className="image-wrapper">
              <Image
                src="/images/abthome.jpg"
                alt="Professional Cleaning Service"
                width={600}
                height={600}
                className="about-image"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="about-text-block">
            <h2 className="about-title">
              We Deliver <span className="accent">Immaculate Results</span>
            </h2>
            <p className="about-subtext">
              With a foundation built on years of hands-on 
              experience across residential, commercial, 
              and industrial cleaning, we deliver precision, 
              reliability, and care in every service.              
            </p>
            <p className="about-subtext">
              Based in the UK, our team approaches each 
              space with meticulous attention to detail—because 
              to us, cleanliness isn&apos;t just a task, 
              it&apos;s a standard we uphold.
            </p>
            <a href="/about" className="about-button">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background-color: #f9fafa;
          padding: 6rem 1rem;
        }

        .about-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 4rem;
          align-items: center;
        }

        .about-image-block {
          display: flex;
          justify-content: center;
        }

        .image-wrapper {
          width: 100%;
          max-width: 600px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          transition: transform 0.4s ease;
        }

        .image-wrapper:hover {
          transform: scale(1.03);
        }

        .about-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
        }

        .about-text-block {
          max-width: 600px;
        }

        .about-title {
          font-size: 2.3rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .accent {
          color: #00b4f2;
          font-weight: 900;
        }

        .about-subtext {
          font-size: 1.15rem;
          color: #4a4a4a;
          line-height: 1.8;
          margin-bottom: 1.2rem;
        }

        .about-button {
          display: inline-block;
          margin-top: 1.5rem;
          background-color: #00b4f2;
          color: #fff;
          padding: 0.85rem 2.25rem;
          border-radius: 999px;
          font-weight: 600;
          text-decoration: none;
          font-size: 1rem;
          box-shadow: 0 8px 20px rgba(0, 180, 242, 0.3);
          transition: all 0.3s ease;
        }

        .about-button:hover {
          background-color: #009ed3;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .about-title {
            font-size: 2.25rem;
            text-align: center;
          }

          .about-text-block {
            text-align: center;
          }

          .about-button {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
};
