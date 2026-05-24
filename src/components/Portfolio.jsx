import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Globe, Smartphone, Megaphone, Wrench } from 'lucide-react';

const CATEGORIES = ['All', 'Web App', 'Mobile App', 'Marketing', 'Directory'];

const projects = [
    {
        name: 'We The People 39120',
        desc: 'Civic reporting platform for Natchez, Mississippi. Citizens report neighborhood issues — potholes, illegal dumping, graffiti — mapped publicly and routed to city aldermen.',
        tech: ['Next.js', 'React', 'Supabase', 'PostGIS', 'Resend', 'Tailwind'],
        category: 'Web App',
        live: 'https://we-the-people-39120.vercel.app',
        github: null,
        color: '#1A5EA8',
        accent: '#2D7A4F',
    },
    {
        name: 'MissLouLocal',
        desc: 'Digital business directory for the Miss-Lou region (Natchez-Vidalia). Local businesses, search, reviews, and push notifications.',
        tech: ['Next.js', 'Supabase', 'TypeScript', 'PWA'],
        category: 'Directory',
        live: null,
        github: 'https://github.com/gsmith0572-dot/missloulocal',
        color: '#9932CC',
        accent: '#00E5FF',
    },
    {
        name: 'TableReady',
        desc: 'Restaurant management system — POS, KDS (kitchen display), waiter dashboard, and admin analytics. Real-time order flow from table to kitchen.',
        tech: ['React', 'Firebase', 'TypeScript', 'Real-time'],
        category: 'Web App',
        live: null,
        github: 'https://github.com/gsmith0572-dot/TableReady',
        color: '#F97316',
        accent: '#EAB308',
    },
    {
        name: 'TurboWash 360',
        desc: 'Mobile car wash business platform — service booking, route optimization, and customer-facing marketing materials.',
        tech: ['Mobile', 'Marketing', 'PWA'],
        category: 'Mobile App',
        live: null,
        github: 'https://github.com/gsmith0572-dot/turbowash360-mobile-app',
        color: '#06B6D4',
        accent: '#0EA5E9',
    },
    {
        name: 'Truly Free PDF Tools',
        desc: 'Free browser-based PDF tools — no signup, no watermarks, no upload. Files never leave your device. Built with privacy-first architecture.',
        tech: ['Vanilla JS', 'PDF.js', 'Web Workers', 'Zero backend'],
        category: 'Web App',
        live: null,
        github: 'https://github.com/gsmith0572-dot/truly-free-pdf-tools',
        color: '#EF4444',
        accent: '#F97316',
    },
    {
        name: 'Truly Free Mortgage Calculator',
        desc: 'Financial calculator for mortgage estimation — amortization schedules, payment breakdowns, and scenario comparison.',
        tech: ['React', 'Vite', 'Finance logic'],
        category: 'Web App',
        live: null,
        github: 'https://github.com/gsmith0572-dot/truly-free-mortgage-calculator',
        color: '#10B981',
        accent: '#059669',
    },
    {
        name: 'Natchez Nest',
        desc: 'Real estate and property listing website for the Natchez, MS market. Property search, neighborhood info, and contact flow.',
        tech: ['Web', 'Real Estate', 'SEO'],
        category: 'Web App',
        live: null,
        github: 'https://github.com/gsmith0572-dot/Natchez-Nest',
        color: '#8B5CF6',
        accent: '#6D28D9',
    },
    {
        name: 'La Fiesta Grande',
        desc: 'Restaurant website for La Fiesta Grande — bilingual menu, location, hours, and online ordering integration.',
        tech: ['React', 'Firebase', 'Bilingual'],
        category: 'Web App',
        live: null,
        github: 'https://github.com/gsmith0572-dot/La-Fiesta-or-La-Fiesta-Grande-',
        color: '#F59E0B',
        accent: '#DC2626',
    },
    {
        name: 'Logistics Smith FBA',
        desc: 'Amazon FBA logistics website — prep center services, pricing, and client onboarding for third-party fulfillment operations.',
        tech: ['Web', 'E-commerce', 'FBA'],
        category: 'Marketing',
        live: null,
        github: 'https://github.com/gsmith0572-dot/logisticssmithfba',
        color: '#64748B',
        accent: '#94A3B8',
    },
    {
        name: 'Magnolia Arts',
        desc: 'Arts organization website for Natchez, MS — events calendar, gallery, membership, and community engagement.',
        tech: ['Web', 'Events', 'Gallery'],
        category: 'Web App',
        live: null,
        github: 'https://github.com/gsmith0572-dot/Magnolia-Arts',
        color: '#EC4899',
        accent: '#DB2777',
    },
];

const categoryIcons = {
    'Web App': <Globe size={14} />,
    'Mobile App': <Smartphone size={14} />,
    'Marketing': <Megaphone size={14} />,
    'Directory': <Wrench size={14} />,
};

const Portfolio = () => {
    const [active, setActive] = useState('All');

    const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

    return (
        <section id="portfolio" style={{ padding: '100px 2rem', position: 'relative' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                        Real <span className="text-gradient">Projects</span>
                    </h2>
                    <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto' }}>
                        Production apps and websites built for real clients and real users.
                    </p>
                </div>

                {/* Filter tabs */}
                <div style={{
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'center',
                    marginBottom: '50px',
                    flexWrap: 'wrap',
                }}>
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            style={{
                                padding: '8px 20px',
                                borderRadius: '999px',
                                border: active === cat
                                    ? '1px solid #00E5FF'
                                    : '1px solid rgba(255,255,255,0.1)',
                                background: active === cat
                                    ? 'rgba(0,229,255,0.1)'
                                    : 'rgba(255,255,255,0.03)',
                                color: active === cat ? '#00E5FF' : '#a0a0a0',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                fontWeight: active === cat ? '700' : '400',
                                transition: 'all 0.2s',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '24px',
                }}>
                    <AnimatePresence>
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -6 }}
                                style={{
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                    background: 'rgba(255,255,255,0.03)',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                {/* Color bar */}
                                <div style={{
                                    height: '4px',
                                    background: `linear-gradient(90deg, ${project.color}, ${project.accent})`,
                                }} />

                                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    {/* Category badge */}
                                    <div style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                        padding: '4px 10px',
                                        borderRadius: '999px',
                                        background: `${project.color}22`,
                                        border: `1px solid ${project.color}44`,
                                        color: project.color,
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        marginBottom: '14px',
                                        alignSelf: 'flex-start',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                    }}>
                                        {categoryIcons[project.category]}
                                        {project.category}
                                    </div>

                                    {/* Title */}
                                    <h3 style={{
                                        fontSize: '1.25rem',
                                        fontWeight: '800',
                                        color: '#fff',
                                        marginBottom: '10px',
                                    }}>
                                        {project.name}
                                    </h3>

                                    {/* Description */}
                                    <p style={{
                                        color: '#a0a0a0',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.6',
                                        marginBottom: '18px',
                                        flex: 1,
                                    }}>
                                        {project.desc}
                                    </p>

                                    {/* Tech tags */}
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '6px',
                                        marginBottom: '20px',
                                    }}>
                                        {project.tech.map(t => (
                                            <span key={t} style={{
                                                padding: '3px 10px',
                                                borderRadius: '6px',
                                                background: 'rgba(255,255,255,0.06)',
                                                color: '#ccc',
                                                fontSize: '0.75rem',
                                                fontWeight: '500',
                                            }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '6px',
                                                    padding: '8px 16px',
                                                    borderRadius: '10px',
                                                    background: `linear-gradient(135deg, ${project.color}, ${project.accent})`,
                                                    color: '#fff',
                                                    textDecoration: 'none',
                                                    fontSize: '0.85rem',
                                                    fontWeight: '700',
                                                }}
                                            >
                                                <ExternalLink size={14} />
                                                Live Site
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '6px',
                                                    padding: '8px 16px',
                                                    borderRadius: '10px',
                                                    border: '1px solid rgba(255,255,255,0.15)',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    color: '#ccc',
                                                    textDecoration: 'none',
                                                    fontSize: '0.85rem',
                                                    fontWeight: '600',
                                                }}
                                            >
                                                <Code2 size={14} />
                                                View Code
                                            </a>
                                        )}
                                        {!project.live && !project.github && (
                                            <span style={{
                                                fontSize: '0.8rem',
                                                color: '#555',
                                                fontStyle: 'italic',
                                            }}>
                                                Private client project
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Footer note */}
                <p style={{
                    textAlign: 'center',
                    color: '#444',
                    fontSize: '0.85rem',
                    marginTop: '50px',
                }}>
                    All projects built and deployed by{' '}
                    <span className="text-gradient" style={{ fontWeight: '700' }}>KlickifyAgency</span>
                    {' '}— some repos are private by client request.
                </p>
            </div>
        </section>
    );
};

export default Portfolio;
