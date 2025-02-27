import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';

export const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
                <img className="logo-navbar" src={logo} alt="" />
                TheCimberRomsYT
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-link active">Inicio</Link>
                    <a className="nav-item nav-link" href="#">Roms</a>
                    <Link to="/dmca" className="nav-item nav-link">Dmca</Link>
                </div>
            </div>
        </nav>
    );
};