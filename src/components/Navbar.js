import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#16537e' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={{ color: 'white' }}>
          Quizly
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" style={{ color: 'white' }}>
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link active dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'white' }}
              >
                Categories
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/quizscreen" className="dropdown-item">
                    World Knowledge
                  </Link>
                </li>
                <li>
                  <Link to="/quizscreentwo" className="dropdown-item">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link to="/quizscreenthree" className="dropdown-item">
                    Entertainment
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
