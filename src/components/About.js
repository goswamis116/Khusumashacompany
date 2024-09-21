import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS library
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title text-center">About Our Company</h2>
        <div className="about-content">
          <p>
          Khusumasha is a dynamic software startup company and leading solution provider based in Kolkata. We are passionate about leveraging technology to empower businesses and individuals with innovative software solutions. With a team of highly skilled professionals, we strive to deliver cutting-edge products and services tailored to meet the unique needs of our clients. Our commitment to excellence and customer satisfaction sets us apart, as we work closely with businesses across diverse industries to unlock their true potential through customized software solutions. Whether it's developing robust web applications, creating intuitive mobile apps, or providing expert consultancy, our expertise spans the entire software development lifecycle. We are dedicated to delivering solutions that drive growth, optimize operations, and enhance user experiences. Partner with Khusumasha and embark on a transformative journey towards digital success.
          </p>
        </div>
        <div className="team-section" data-aos="fade-up">
          <h3 className="team-heading">Core Management Team</h3>
          <div className="team-cards">
            <div className="team-card">
            
            <a href="https://www.linkedin.com/in/santanu-goswami-217414133/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/mypic.jpg" alt="Team Member 1" className="team-member-img" />
              <h4 className="team-member-name">Santanu Goswami</h4>
              <p className="team-member-position">Founder and CEO</p>
              </a>
            </div>
            <div className="team-card">
              <img src="/assets/gorai.jpg" alt="Team Member 2" className="team-member-img" />
              <h4 className="team-member-name">Amar Gorai</h4>
              <p className="team-member-position">Co-founder and Infra Head</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
