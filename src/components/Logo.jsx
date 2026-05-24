import React from 'react';

// SVG Logo component that faithfully recreates the Klickify logo with true transparency
const Logo = ({ className = "", style = {} }) => (
    <div className={`logo-wrapper ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', ...style }}>
        <svg
            width="50"
            height="55"
            viewBox="0 0 100 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0 }}
        >
            <defs>
                {/* Main gradient for the K - cyan to purple */}
                <linearGradient id="kGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00E5FF" />
                    <stop offset="50%" stopColor="#7B68EE" />
                    <stop offset="100%" stopColor="#9932CC" />
                </linearGradient>

                {/* Glow filter */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Dispersing pixels on the left side - cyan to blue */}
            <g opacity="0.9">
                {/* Top area pixels */}
                <rect x="5" y="8" width="4" height="4" fill="#00BFFF" />
                <rect x="12" y="5" width="3" height="3" fill="#00CED1" />
                <rect x="8" y="15" width="5" height="5" fill="#1E90FF" />
                <rect x="2" y="20" width="3" height="3" fill="#00E5FF" />
                <rect x="15" y="12" width="4" height="4" fill="#4169E1" />
                <rect x="6" y="25" width="4" height="4" fill="#6495ED" />
                <rect x="18" y="18" width="3" height="3" fill="#00BFFF" />
                <rect x="10" y="22" width="5" height="5" fill="#1E90FF" />
                <rect x="3" y="32" width="4" height="4" fill="#00CED1" />

                {/* Middle area pixels */}
                <rect x="8" y="38" width="5" height="5" fill="#4169E1" />
                <rect x="2" y="45" width="4" height="4" fill="#6A5ACD" />
                <rect x="12" y="42" width="3" height="3" fill="#7B68EE" />
                <rect x="5" y="52" width="5" height="5" fill="#8A2BE2" />
                <rect x="15" y="48" width="4" height="4" fill="#9370DB" />
                <rect x="8" y="58" width="4" height="4" fill="#9932CC" />

                {/* Bottom area pixels - purple tones */}
                <rect x="3" y="65" width="5" height="5" fill="#8B008B" />
                <rect x="12" y="62" width="4" height="4" fill="#9400D3" />
                <rect x="6" y="72" width="4" height="4" fill="#BA55D3" />
                <rect x="15" y="70" width="3" height="3" fill="#DA70D6" />
                <rect x="10" y="78" width="5" height="5" fill="#9932CC" />
                <rect x="2" y="82" width="4" height="4" fill="#8A2BE2" />
                <rect x="18" y="75" width="3" height="3" fill="#7B68EE" />
            </g>

            {/* Main K shape - left vertical bar */}
            <path
                d="M25 15 L25 95 L38 95 L38 15 Z"
                fill="url(#kGradient)"
                filter="url(#glow)"
            />

            {/* K diagonal arm going up-right */}
            <path
                d="M38 50 L70 15 L82 15 L45 55 Z"
                fill="url(#kGradient)"
                filter="url(#glow)"
            />

            {/* K diagonal arm going down-right */}
            <path
                d="M42 52 L80 95 L68 95 L38 58 Z"
                fill="url(#kGradient)"
                filter="url(#glow)"
            />

            {/* Circuit board lines and nodes */}
            <g stroke="url(#kGradient)" strokeWidth="1.5" fill="none" filter="url(#glow)">
                {/* Horizontal lines from K */}
                <line x1="38" y1="30" x2="55" y2="30" />
                <line x1="55" y1="30" x2="55" y2="42" />
                <circle cx="55" cy="42" r="3" fill="url(#kGradient)" />

                <line x1="38" y1="45" x2="50" y2="45" />
                <circle cx="50" cy="45" r="2.5" fill="url(#kGradient)" />

                <line x1="38" y1="60" x2="52" y2="60" />
                <line x1="52" y1="60" x2="52" y2="72" />
                <circle cx="52" cy="72" r="3" fill="url(#kGradient)" />

                {/* Lines extending from bottom diagonal */}
                <line x1="55" y1="70" x2="65" y2="70" />
                <line x1="65" y1="70" x2="65" y2="82" />
                <circle cx="65" cy="82" r="2.5" fill="url(#kGradient)" />

                <line x1="60" y1="78" x2="75" y2="78" />
                <circle cx="75" cy="78" r="2" fill="url(#kGradient)" />

                <line x1="68" y1="85" x2="80" y2="85" />
                <line x1="80" y1="85" x2="80" y2="95" />
                <circle cx="80" cy="95" r="3" fill="url(#kGradient)" />

                <line x1="72" y1="90" x2="88" y2="90" />
                <circle cx="88" cy="90" r="2" fill="url(#kGradient)" />
            </g>

            {/* Cursor pointer at top right */}
            <g transform="translate(75, 8)">
                <path
                    d="M0 0 L0 18 L5 14 L9 22 L12 20 L8 12 L14 12 Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="0.5"
                />
            </g>

            {/* Lens flare / sparkle effect */}
            <ellipse cx="78" cy="28" rx="8" ry="1.5" fill="white" opacity="0.6" />
            <ellipse cx="92" cy="58" rx="6" ry="1" fill="white" opacity="0.4" />
        </svg>

        {/* Text portion */}
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{
                fontSize: '22px',
                fontWeight: 700,
                color: 'white',
                letterSpacing: '3px',
                fontFamily: "'Inter', 'Segoe UI', sans-serif"
            }}>
                KLICKIFY
            </span>
            <span style={{
                fontSize: '11px',
                fontWeight: 400,
                color: 'white',
                letterSpacing: '5px',
                fontFamily: "'Inter', 'Segoe UI', sans-serif"
            }}>
                AGENCY
            </span>
        </div>
    </div>
);

export default Logo;
