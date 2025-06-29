import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">

        <a className="navbar-brand d-flex align-items-center" href="/">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OUGf2fwKSvwsbva6pHwtPbsXbs3ja3Y9Ww&s" 
            alt="Vehicle Logo" 
            width="40" 
            height="40" 
            className="me-2"
          />
          <strong style={{fontStyle:"italic"}}>Vehicle Renting Corner</strong>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
