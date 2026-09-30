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
                <div className="nav-links-mobile" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    {[['services', 'Services'], ['portfolio', 'Portfolio'], ['about', 'About'], ['contact', 'Contact']].map(([id, label]) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className="nav-link-text"
                            style={{
                                color: '#a0a0a0',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                fontWeight: '500',
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => e.target.style.color = '#00E5FF'}
                            onMouseLeave={e => e.target.style.color = '#a0a0a0'}
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="nav-cta-btn"
                        style={{
                            background: 'linear-gradient(135deg, #00E5FF, #00CED1)',
                            color: '#000',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: '700',
                            padding: '10px 22px',
                            borderRadius: '50px',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                        }}
                        onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 6px 20px rgba(0,229,255,0.4)'; }}
                        onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = 'none'; }}
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
