import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS library
  }, []);

  const isMobile = window.innerWidth <= 768; // Check if the screen size is mobile

  return (
    <section id="contact" className="section-contact">
      <div className="container">
        <div className="row">
          {!isMobile && (
            <div className="col-lg-6">
              <div className="contact-image">
                <img src="/assets/contact2.jpg" alt="Contact" />
              </div>
            </div>
          )}
          <div className="col-lg-6">
            <div className="contact-form" data-aos="fade-left">
              <h2>Contact Us</h2>
              <form>
                <div className="form-group" data-aos="fade-up">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group" data-aos="fade-up" data-aos-delay="200">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your email" required />
                </div>
                <div className="form-group" data-aos="fade-up" data-aos-delay="400">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="Your phone number" required />
                </div>
                <div className="form-group" data-aos="fade-up" data-aos-delay="600">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Your message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" data-aos="fade-up" data-aos-delay="800">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
