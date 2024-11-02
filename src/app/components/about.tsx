"use client";
import "../style/about.css"
import Image from "next/image";
const About = () => {
    return (
      
    <div id="about">
        <div className="about-us-container">
      <div className="about-us-heading">
        <h1 data-aos="fade-up">About Us</h1>
      </div>
      <div className="about-us-content">
        <div className="about-us-image">
          <Image
            src="/about.webp"
            alt="Flower Image"
            width={400}
            height={500}
          />
        </div>
        <div className="about-us-text">
          <p data-aos="fade-up">
            We are a team of passionate florists dedicated to providing the freshest and most beautiful flowers for every occasion.
          </p>
          <p data-aos="fade-up">
            With years of experience in the industry, we have built a reputation for quality and reliability.
          </p>
          <p data-aos="fade-up">
            Our flowers are sourced from local farms to ensure the highest quality and longest vase life.
            </p>
        </div>
      </div>
    </div>


    </div>
    )
}

export default About