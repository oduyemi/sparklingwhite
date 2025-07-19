"use client";
import Image from "next/image";
import React from "react";
import "./About.css"; 

export const AboutHome: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-row">
          {/* Image */}
          <div className="about-image-wrapper">
            <div className="image-inner">
              <Image
                src="/images/abthome.jpg"
                alt="Experience Image"
                width={600}
                height={600}
                className="about-image"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <h2 className="about-heading">
              <span className="about-years">10</span> Years Experience
            </h2>
            <p className="about-paragraph">
              We specialize in delivering reliable and cutting-edge solutions for modern businesses.
              Our decade of experience ensures your goals are met with expertise and precision.
            </p>
            <p className="about-paragraph">
              Whether you&apos;re a startup or an enterprise, our team brings strategic insight and
              technical mastery to your project—maximizing results with minimum friction.
            </p>
            <a href="/about" className="about-btn">Learn More</a>
          </div>
        </div>
      </div>

      {/* Embedded Styling */}
      <style jsx>{`
        .about-section {
          background-color: #f8f9fc;
          padding: 4rem 1rem;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 2rem;
        }

        .about-image-wrapper {
          flex: 1 1 50%;
        }

        .image-inner {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.4s ease;
        }

        .image-inner:hover {
          transform: scale(1.03);
        }

        .about-image {
          object-fit: cover;
          border-radius: 20px;
        }

        .about-content {
          flex: 1 1 50%;
          padding: 1rem;
        }

        .about-heading {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #1a202c;
        }

        .about-years {
          font-size: 3.5rem;
          color: #00b4f2;
          font-weight: 900;
        }

        .about-paragraph {
          font-size: 1.1rem;
          color: #4a5568;
          margin-bottom: 1rem;
          line-height: 1.7;
        }

        .about-btn {
          display: inline-block;
          margin-top: 1rem;
          background-color: #00b4f2;
          color: #fff;
          padding: 0.75rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          box-shadow: 0 6px 20px rgba(0, 180, 242, 0.3);
          transition: all 0.3s ease-in-out;
        }

        .about-btn:hover {
          background-color: #009ed3;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .about-row {
            flex-direction: column;
          }

          .about-content,
          .about-image-wrapper {
            flex: 1 1 100%;
            text-align: center;
          }

          .about-heading {
            font-size: 2rem;
          }

          .about-years {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
};
