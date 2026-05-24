import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/hero-bg.png';

const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -2,
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.6
            }}></div>

            {/* Dark Gradient Overlay for readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, transparent 0%, #050510 90%)',
                zIndex: -1
            }}></div>

            <div style={{
                maxWidth: '1200px',
                width: '100%',
                padding: '0 2rem',
                textAlign: 'center',
                zIndex: 1
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        marginBottom: '1.5rem',
                        lineHeight: 1.1
                    }}>
                        Future-Proof <br />
                        <span className="text-gradient">Your Business.</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: '#ccc',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem',
                        lineHeight: 1.6
                    }}
                >
                    We build high-performance mobile apps, stunning websites, and seamless automations to help you dominate your market.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <a href="#contact" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
                        Transform Your Biz
                    </a>
                    <a href="#services" className="glass" style={{
                        padding: '16px 40px',
                        fontSize: '1.1rem',
                        borderRadius: '50px',
                        color: 'white',
                        textDecoration: 'none',
                        display: 'inline-block'
                    }}>
                        View Services
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
