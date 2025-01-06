import React, { useState, useEffect } from 'react';
import client from '../../client';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.png';

export const Contact = () => {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        client
            .fetch(`*[_type == "contact"][0]`)
            .then((data) => setContact(data))
            .catch((error) => console.error('Error fetching contact data:', error));
    }, []);

    if (!contact) {
        return <div role="status" aria-live="polite">Loading Contact Section...</div>;
    }

    return (
        <div className="contact" id="contact">
            <h3>{contact.title || "Contact Me"}</h3>
            <p>{contact.description || "Feel free to reach out via email or connect with me on social platforms."}</p>
            {contact.email && (
                <a
                    href={`mailto:${contact.email}`}
                    className="email cta primary"
                    aria-label={`Send an email to ${contact.email}`}
                >
                    Email Me
                </a>
            )}
            <div className="contact-buttons">
                {contact.linkedin && (
                    <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my LinkedIn profile"
                    >
                        <img src={linkedin} alt="LinkedIn Icon" />
                    </a>
                )}
                {contact.github && (
                    <a
                        href={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my GitHub profile"
                    >
                        <img src={github} alt="GitHub Icon" />
                    </a>
                )}
            </div>
        </div>
    );
};
