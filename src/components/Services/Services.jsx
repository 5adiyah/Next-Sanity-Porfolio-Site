import React, { useState, useEffect } from 'react';
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
const urlFor = (source) => source && source.asset ? builder.image(source).url() : null;

export const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Fetch data for services
        client
            .fetch(`*[_type == "services"]`)
            .then((data) => {
                setServices(data);
            })
            .catch((error) => console.error('Error fetching services data:', error));
    }, []);

    if (!services.length) {
        return <div>Loading services...</div>; 
    }

    return (
        <div className="services">
            {services.map((service) => (
                <div
                    key={service._id}
                    className="service-card"
                    style={{
                        backgroundColor: service.backgroundColor || '#f4f4f4', 
                    }}
                >
                    {service.image && (
                        <img
                            src={urlFor(service.image)}
                            alt={service.service || 'Service image'}
                            className="service-image"
                        />
                    )}
                    <h3>{service.service}</h3>
                </div>
            ))}
        </div>
    );
};
