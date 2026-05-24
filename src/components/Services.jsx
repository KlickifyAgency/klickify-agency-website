import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Cpu } from 'lucide-react';

const services = [
    {
        icon: <Globe size={40} color="#00E5FF" />,
        title: "Digital Marketing & Websites",
        desc: "Strategies that convert. Ultra-fast, SEO-optimized websites that turn visitors into loyal customers."
    },
    {
        icon: <Smartphone size={40} color="#9932CC" />,
        title: "Mobile Apps (iOS & Android)",
        desc: "Native performance, beautiful design. We build apps that users love and businesses rely on."
    },
    {
        icon: <Cpu size={40} color="#00E5FF" />,
        title: "Custom Automation",
        desc: "Save time and reduce errors. Automate your workflow logic to work while you sleep."
    }
];

const Services = () => {
    return (
        <section id="services" style={{ padding: '100px 2rem', position: 'relative' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our <span className="text-gradient">Expertise</span></h2>
                    <p style={{ color: '#a0a0a0' }}>Tech-driven solutions for modern problems.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="glass"
                            style={{
                                padding: '40px',
                                borderRadius: '20px',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.05)'
                            }}
                        >
                            <div style={{ marginBottom: '20px' }}>{service.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{service.title}</h3>
                            <p style={{ color: '#ccc', lineHeight: '1.6' }}>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
