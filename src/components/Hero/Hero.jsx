import React, { useState, useEffect } from 'react';
import client from '../../client';

export const Hero = () => {
    const [hero, setHero] = useState(null);

    useEffect(() => {
        // Fetch the hero data from Sanity
        client
            .fetch(`*[_type == "hero"][0]`)
            .then((data) => setHero(data))
            .catch((error) => console.error('Error fetching hero data:', error));
    }, []);

    if (!hero) {
        return <div role="status" aria-live="polite">Loading Hero Section...</div>;
    }

    return (
        <section className="hero" id="hero" aria-labelledby="hero-title">
            <div className="hero-content">
                <h1 id="hero-title" className="hero-title">
                    {hero.title || "Welcome to My Portfolio"}
                </h1>
                <p className="hero-description">
                    {hero.description || "Showcasing my journey, skills, and projects."} 
                </p>
            </div>
        </section>
    );
};
