import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BarChart2, Zap } from 'lucide-react';

const services = [
    {
        icon: <MapPin size={36} color="#00E5FF" />,
        title: 'Rank & Rent SEO',
        desc: 'We build hyper-local lead-generation websites, rank them on Google\'s first page, then rent exclusive access to local contractors. Zero ad spend. Pure organic dominance.',
        tag: 'ORGANIC',
        tagColor: '#00E5FF'
    },
    {
        icon: <BarChart2 size={36} color="#9932CC" />,
        title: 'Google Ads Management',
        desc: 'Programmatic campaign management across multiple client accounts via Google Ads API. Keyword research, bid optimization, and conversion tracking — at scale.',
        tag: 'GOOGLE ADS API',
        tagColor: '#9932CC'
    },
    {
        icon: <Zap size={36} color="#00E5FF" />,
        title: 'AdSense Utility Tools',
        desc: 'We build and monetize custom web tools — calculators, converters, and lookup utilities — optimized for AdSense revenue and high organic traffic volume.',
        tag: 'ADSENSE',
        tagColor: '#00E5FF'
    }
];

const Services = () => {
    return (
        <section id="services" style={{ padding: '100px 2rem', position: 'relative' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <p style={{
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        letterSpacing: '0.18em',
                        color: '#00E5FF',
                        textTransform: 'uppercase',
                        marginBottom: '16px'
                    }}>
                        // SERVICES
                    </p>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', fontWeight: '800' }}>
                        What We Do
                    </h2>
                    <p style={{ color: '#a0a0a0', fontSize: '1.1rem' }}>
                        Three business models. One strategic advantage.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '24px'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                padding: '36px',
                                borderRadius: '16px',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.07)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px'
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '12px',
                                background: 'rgba(0,229,255,0.08)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#fff' }}>
                                {service.title}
                            </h3>
                            <p style={{ color: '#a0a0a0', lineHeight: '1.65', fontSize: '0.95rem', flex: 1 }}>
                                {service.desc}
                            </p>
                            <div>
                                <span style={{
                                    display: 'inline-block',
                                    border: `1px solid ${service.tagColor}40`,
                                    color: service.tagColor,
                                    fontSize: '0.7rem',
                                    fontWeight: '700',
                                    letterSpacing: '0.12em',
                                    padding: '4px 12px',
                                    borderRadius: '50px',
                                    background: `${service.tagColor}10`
                                }}>
                                    {service.tag}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
