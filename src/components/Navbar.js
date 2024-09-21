import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#FF0060' }}>
      <div className="container">
        <a className="navbar-brand" href="#"><h2>KhusuMasha</h2></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Added ms-auto class */}
            <li className="nav-item" >
              <a className="nav-link" href="#home" style={{ fontWeight: 'bold'} }>Home</a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link" href="#services" style={{ fontWeight: 'bold' }}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" style={{ fontWeight: 'bold' }}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" style={{ fontWeight: 'bold' }}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
