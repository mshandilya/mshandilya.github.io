import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const titles = [
    "Software Engineer",
    "Competitive Programmer",
    "Seasonal Researcher",
    "Tech Enthusiast"
];

const Hero: React.FC = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % titles.length;
            const fullText = titles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <div className="section hero-section" style={{ flexDirection: 'column', gap: '1rem' }}>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ fontSize: '4rem', fontWeight: 'bold' }}
            >
                Hi, I'm <span style={{ color: 'var(--accent-color)' }}>Mrigankashekhar</span>
            </motion.h1>

            <div style={{ fontSize: '2rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span>I'm a</span>
                <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold', minWidth: '10px' }}>
                    {text}
                    <span className="cursor" style={{ color: 'var(--text-color)', fontWeight: 'normal' }}>|</span>
                </span>
            </div>
            <style>{`
                .cursor {
                    animation: blink 1s step-end infinite;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default Hero;
