import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <Services />
            <Portfolio />
            <Contact />

            <footer style={{
                textAlign: 'center',
                padding: '50px 30px',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                color: '#666',
                fontSize: '0.9rem',
                background: '#0a0a0a'
            }}>
                <div style={{ marginBottom: '10px' }}>
                    <span className="text-gradient" style={{ fontWeight: 'bold' }}>Klickify Agency</span>
                </div>
                © {new Date().getFullYear()} Klickify Agency. All rights reserved.
            </footer>
        </div>
    )
}

export default App
