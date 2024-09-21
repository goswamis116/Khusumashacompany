import React from 'react';
import { Carousel } from 'react-bootstrap';
import './home.css';

const Home = () => {
  return (
    <section id="home" className="section">
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/background.jpg"
              alt="Slide 1"
            />
            <Carousel.Caption>
              <h3>We are Here to Build</h3>
              <p>Ready-To-Use Solutions</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/future.jpg"
              alt="Slide 2"
            />
            <Carousel.Caption>
              <h3>See the Future with Us</h3>
              <p>Innovate for a better lifestyle</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/coding.jpg"
              alt="Slide 3"
            />
            <Carousel.Caption>
              <h3>Our Services</h3>
              <p>Music | Blogging | E-commerce | Web Development and lots more..</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/innovation.jpg"
              alt="Slide 4"
            />
            <Carousel.Caption>
              <h3>Let's Innovate for the Future</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
