import React from 'react';
import QRCode from "react-qr-code";
import { Mail } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const Contact = () => {
    const whatsappNumber = "16013348430";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <section id="contact" style={{ padding: '100px 2rem', background: 'linear-gradient(to top, #050510, #0a0a20)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Get In <span className="text-gradient">Touch</span></h2>
                <p style={{ color: '#a0a0a0', marginBottom: '60px' }}>Ready to start your project? Scan the code or drop us a line.</p>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '50px',
                    alignItems: 'center'
                }}>
                    {/* Card 1: Direct Contact Info */}
                    <div className="glass" style={{ padding: '40px', borderRadius: '20px', minWidth: '300px', textAlign: 'left' }}>
                        <h3 style={{ marginBottom: '30px' }}>Contact Details</h3>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <Mail color="#00E5FF" />
                            <a href="mailto:support@klickifyagency.com" style={{ fontSize: '1.1rem', color: '#00E5FF', textDecoration: 'none' }}>support@klickifyagency.com</a>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <WhatsAppIcon size={24} color="#25D366" />
                            <a href={whatsappLink} style={{ fontSize: '1.1rem', color: '#25D366', textDecoration: 'none', fontWeight: 'bold' }}>+1 (601) 334-8430</a>
                        </div>
                    </div>

                    {/* Card 2: QR Code */}
                    <div className="glass" style={{
                        padding: '30px',
                        borderRadius: '20px',
                        background: 'white', /* QR needs high contrast */
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <QRCode value={whatsappLink} size={200} />
                        <p style={{ color: '#333', marginTop: '15px', fontWeight: 'bold' }}>Scan to Chat on WhatsApp</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
