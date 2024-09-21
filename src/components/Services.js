import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Services.css';

const Services = () => {
    useEffect(() => {
      Aos.init({ duration: 1000 }); // Initialize AOS library
    }, []);
  
    return (
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title text-center" style={{paddingTop:'200px'}}>Our Services</h2>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-up">
              <div className="service-card">
              
                <img src="/assets/digi.jpg" alt="Service 1" className="service-img" />
                <h3 className="service-title">Providing digital Solution</h3>
                <p className="service-description">
                  We keep trying to provide the digital solutions to the world and we keep Upgrading.
                </p>
                
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="service-card">
              <a href="https://www.youtube.com/channel/UCmSkk3-0Jfmd7-YVny5TgLA" target="_blank" rel="noopener noreferrer">
                <img src="/assets/khusuyoutube.jpg" alt="Service 2" className="service-img" />
                <h3 className="service-title">Our Youtube Channel</h3>
                <p className="service-description">
                  Click here to see our YouTube Channel and Subscribe the channel for latest Updates.
                </p>
                </a>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
              <div className="service-card">
              <a href="https://passwordgeneratorbykhusumasha.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/pass.png" alt="Service 3" className="service-img" />
                <h3 className="service-title">Password Generator</h3>
                <p className="service-description">
                  A website where you can generate the number of password click to visit the site
                </p>
                </a>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
              <div className="service-card">
                <img src="/assets/growing.jpg" alt="Service 4" className="service-img" />
                <h3 className="service-title">KhusuMasha Blog</h3>
                <p className="service-description">
                  A Blogging website where you can see the post and write the posts,click to visit.
                </p>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
              <div className="service-card">
              
              <a href="https://goswamis116.github.io/my-Geet-Music-App/" target="_blank" rel="noopener noreferrer">

                <img src="/assets/music.jpg" alt="Service 5" className="service-img" />
                <h3 className="service-title">Geet by Khusumasha</h3>
                <p className="service-description">
                  A Music website where you can play and listen the music & songs,click to visit.
                </p>
              </a>
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
              <div className="service-card">
              <a href="https://khusumasha.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/chatt.png" alt="Service 6" className="service-img" />
                <h3 className="service-title">Khusumasha Chat</h3>
                <p className="service-description">
                  A Chatting website where you can chat and interact with the friends,click to visit.
                </p>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  };
  

export default Services
