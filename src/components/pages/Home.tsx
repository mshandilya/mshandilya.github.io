import React from 'react';
import Hero from '../organisms/Hero';
import Socials from '../organisms/Socials';
import '../../styles/home.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <Hero />
            <Socials />
        </div>
    );
};

export default Home;
