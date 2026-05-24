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
                <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                    {['services', 'portfolio', 'contact'].map(id => (
                        <a
                            key={id}
                            href={`#${id}`}
                            style={{
                                color: '#a0a0a0',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                fontWeight: '500',
                                textTransform: 'capitalize',
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => e.target.style.color = '#00E5FF'}
                            onMouseLeave={e => e.target.style.color = '#a0a0a0'}
                        >
                            {id}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
