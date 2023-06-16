import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
   
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#16537e' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{ color: 'white' }}>Quizly</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'white' }}>Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
                                Categories
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/quizscreen">World Knowledge</Link></li>
                                <li><Link className="dropdown-item" to="/quizscreentwo">Sports</Link></li>
                                <li><Link className="dropdown-item" to="/quizscreenthree">Entertainment</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}