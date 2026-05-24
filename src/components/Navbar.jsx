import React, { useState, useEffect } from 'react';
import '../index.css';
import logoImage from '../assets/images/logo.jpg';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`glass-nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="logo-section">
                    <img src={logoImage} alt="Klickify Agency" className="navbar-logo-img" style={{ mixBlendMode: 'screen' }} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
