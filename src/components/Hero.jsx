import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Star, TrendingUp } from 'lucide-react';
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
            <div style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', height: '100%',
                zIndex: -2,
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.3
            }} />
            <div style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', height: '100%',
                background: 'radial-gradient(circle at center, transparent 0%, #0a0a0a 85%)',
                zIndex: -1
            }} />

            <div style={{
                maxWidth: '1200px',
                width: '100%',
                padding: '0 2rem',
                textAlign: 'center',
                zIndex: 1
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '2rem' }}
                >
                    <span style={{
                        display: 'inline-block',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '50px',
                        padding: '6px 18px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        letterSpacing: '0.12em',
                        color: '#a0a0a0',
                        textTransform: 'uppercase'
                    }}>
                        <span style={{ color: '#00E5FF', marginRight: '6px' }}>●</span>
                        6 Properties Live · Building Daily
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    style={{
                        fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                        marginBottom: '1.5rem',
                        lineHeight: 1.05,
                        fontWeight: '800'
                    }}
                >
                    We Build. We Rank.<br />
                    <span className="text-gradient">We Monetize.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        color: '#ccc',
                        maxWidth: '620px',
                        margin: '0 auto 2.5rem',
                        lineHeight: 1.7
                    }}
                >
                    Klickify Agency builds high-ranking local SEO websites, manages Google Ads campaigns, and creates AdSense utility tools — all under one strategic digital portfolio.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}
                >
                    <a href="#contact" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.05rem' }}>
                        Work With Us
                    </a>
                    <a href="#portfolio" style={{
                        padding: '16px 40px',
                        fontSize: '1.05rem',
                        borderRadius: '50px',
                        color: 'white',
                        textDecoration: 'none',
                        display: 'inline-block',
                        border: '1px solid rgba(255,255,255,0.2)',
                        transition: 'border-color 0.2s, background 0.2s'
                    }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,229,255,0.4)'; e.currentTarget.style.background = 'rgba(0,229,255,0.05)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'transparent'; }}
                    >
                        View Our Work
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '48px',
                        flexWrap: 'wrap'
                    }}
                >
                    {[
                        { icon: <BarChart2 size={16} color="#00E5FF" />, text: '6 Active Properties' },
                        { icon: <Star size={16} color="#00E5FF" />, text: 'Google Ads MCC Partner' },
                        { icon: <TrendingUp size={16} color="#00E5FF" />, text: '100% Organic + Paid Growth' },
                    ].map(({ icon, text }) => (
                        <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a0a0a0', fontSize: '0.875rem', fontWeight: '500' }}>
                            {icon}
                            {text}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
