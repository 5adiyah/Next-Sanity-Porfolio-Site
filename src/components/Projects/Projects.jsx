import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import closeBtn from "../../assets/close-btn.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Configure the image URL builder
const builder = imageUrlBuilder(client);
const urlFor = (source) => (source && source.asset ? builder.image(source).url() : null);

export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const lastFocusedElementRef = useRef(null);

    useEffect(() => {
        client
            .fetch(`*[_type == "project"]`)
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching projects:", error));
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const openModal = (project) => {
        lastFocusedElementRef.current = document.activeElement; // Save the last focused element
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
        if (lastFocusedElementRef.current) {
            lastFocusedElementRef.current.focus(); // Restore focus to the last focused element
        }
    };

    return (
        <div className="projects" id="portfolio">
            {/* Projects Slider */}
            <Slider {...sliderSettings} aria-label="Project Carousel">
                {projects.map((project) => {
                    const imageUrl = urlFor(project.image);

                    return (
                        <div
                            key={project._id}
                            className="project-card"
                            onClick={() => openModal(project)}
                            role="button"
                            tabIndex={0}
                            aria-label={`View details about ${project.title}`}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") openModal(project);
                            }}
                        >
                            {imageUrl && (
                                <img
                                    src={imageUrl}
                                    alt={`Preview of ${project.title}`}
                                    className="project-image"
                                />
                            )}
                        </div>
                    );
                })}
            </Slider>

            {/* Project Modal Details */}
            {selectedProject && (
                <div
                    className="modal"
                    onClick={closeModal}
                    role="dialog"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 id="modal-title">{selectedProject.title}</h3>
                        <p id="modal-description">{selectedProject.description}</p>
                        {selectedProject.githubLink && (
                            <a
                                href={selectedProject.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta"
                                aria-label="View project source code on GitHub"
                            >
                                Source Code
                            </a>
                        )}

                        <button
                            onClick={closeModal}
                            className="close-cta"
                            aria-label="Close project details"
                        >
                            <img
                                src={closeBtn}
                                alt=""
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
