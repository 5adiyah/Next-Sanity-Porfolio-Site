import React, { useState, useEffect } from 'react';
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';

// Configure the image URL builder
const builder = imageUrlBuilder(client);

const urlFor = (source) => (source && source.asset ? builder.image(source).url() : null);

export const About = () => {
    const [about, setAbout] = useState(null);

    useEffect(() => {
        client
            .fetch(`*[_type == "about"][0]`)
            .then((data) => setAbout(data))
            .catch((error) => console.error('Error fetching about data:', error));
    }, []);

    if (!about) return <div role="status" aria-live="polite">Loading About Section...</div>;

    return (
        <div className="about" id="about">
            {about.profileImage && (
                <img
                    src={urlFor(about.profileImage)}
                    alt="Profile of the website owner"
                    className="profile-image"
                />
            )}
            <div className="text-container">
                <h2>{about.title || "About Me"}</h2>
                <p>{about.description || "No description provided."}</p> 
                {about.cta && about.cta.link && (
                    <a
                        href={about.cta.link}
                        className="cta primary"
                        aria-label={`Read more about: ${about.title || "this section"}`}
                    >
                        {about.cta.linkText || "Learn More"} 
                    </a>
                )}
            </div>
        </div>
    );
};
