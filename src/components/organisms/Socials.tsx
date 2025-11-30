import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Socials: React.FC = () => {
    const socialLinks = [
        { Icon: FaGithub, url: "https://github.com/mshandilya", label: "GitHub" },
        { Icon: FaLinkedin, url: "https://linkedin.com/in/mrigankashekhar", label: "LinkedIn" },
        { Icon: FaTwitter, url: "https://twitter.com/themshandilya", label: "Twitter" },
        { Icon: FaEnvelope, url: "mailto:mrigankashekhar2107@gmail.com", label: "Email" },
        { Icon: FaInstagram, url: "https://instagram.com/mrigankashekharshandilya", label: "Instagram" }
    ];

    return (
        <div className="section socials-section" style={{ flexDirection: 'column', gap: '2rem' }}>
            <h2 style={{ fontSize: '3rem' }}>Connect with Me</h2>
            <div style={{ display: 'flex', gap: '2rem' }}>
                {socialLinks.map((link, index) => {
                    const Icon = link.Icon as any;
                    return (
                        <motion.a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, color: 'var(--accent-color)' }}
                            whileTap={{ scale: 0.9 }}
                            style={{ fontSize: '3rem', color: 'var(--text-color)', transition: 'color 0.3s' }}
                            aria-label={link.label}
                        >
                            <Icon />
                        </motion.a>
                    );
                })}
            </div>
        </div>
    );
};

export default Socials;
