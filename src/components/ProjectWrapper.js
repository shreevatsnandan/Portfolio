import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ProjectWrapper = (props) => {
    const isDesktop = window.innerWidth >= 768;
    const iAnchor = window.innerWidth >= 1000;

    useEffect(() => {
        if (isDesktop) {
            AOS.init();
        }
    }, [isDesktop]);

    const openLink = (url) => {
        window.open(url, "_blank");
    };

    const renderButtons = () => (
        <div className="project-buttons" data-aos={isDesktop ? "fade-up" : undefined} data-aos-duration="2000">
            {props.workingLink && (
                <button onClick={() => openLink(props.workingLink)} className="view-button">
                    LIVE DEMO <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
            )}
            {props.link && (
                <button onClick={() => openLink(props.link)} className="view-button">
                    GITHUB <i className="fa-brands fa-github"></i>
                </button>
            )}
        </div>
    );

    return (
        <div className="project-content">
            {props.count === "0" && iAnchor ? (
                <>
                    <div className="design">
                        <div
                            data-aos={isDesktop ? "fade-right" : undefined}
                            data-aos-anchor-placement={iAnchor ? "top-center" : undefined}
                            data-aos-duration="1500"
                            data-aos-offset="100"
                            className="straightline"
                            style={{
                                background: 'linear-gradient(0deg, rgba(244,2,2,1) 0%, rgba(255,190,190,1) 100%)',
                            }}
                        ></div>
                        <img
                            data-aos={isDesktop ? "fade-down" : undefined}
                            data-aos-anchor-placement={iAnchor ? "top-center" : undefined}
                            data-aos-duration="1200"
                            className="project-img"
                            src={props.img}
                            alt="projectImage"
                        />
                    </div>
                    <div data-aos={isDesktop ? "fade-left" : undefined} data-aos-duration="1500" className="proj">
                        <p className="project-title">{props.projectHeading}</p>
                        <p className="project-description">{props.ProjDespriction}</p>
                        <span className="proj-boxes">
                            <p data-aos={isDesktop ? "fade-up" : undefined} data-aos-duration="1400" className="box">{props.SoftUsed1}</p>
                            <p data-aos={isDesktop ? "fade-up" : undefined} data-aos-duration="1700" className="box">{props.SoftUsed2}</p>
                        </span>
                        {renderButtons()}
                    </div>
                </>
            ) : (
                <>
                    <div data-aos={isDesktop ? "fade-right" : undefined} data-aos-duration="1500" className="proj">
                        <p className="project-title">{props.projectHeading}</p>
                        <p className="project-description">{props.ProjDespriction}</p>
                        <span className="proj-boxes">
                            <p data-aos={isDesktop ? "fade-up" : undefined} data-aos-duration="1400" className="box">{props.SoftUsed1}</p>
                            <p data-aos={isDesktop ? "fade-up" : undefined} data-aos-duration="1700" className="box">{props.SoftUsed2}</p>
                        </span>
                        {renderButtons()}
                    </div>
                    <div className="design">
                        <img
                            data-aos={isDesktop ? "fade-up" : undefined}
                            data-aos-anchor-placement={iAnchor ? "top-center" : undefined}
                            data-aos-duration="1200"
                            className="project-img"
                            src={props.img}
                            alt="projectImage"
                        />
                        <div
                            data-aos={isDesktop ? "fade-left" : undefined}
                            data-aos-anchor-placement={iAnchor ? "top-center" : undefined}
                            data-aos-duration="1500"
                            className="straightline"
                            style={{
                                background: 'linear-gradient(0deg, rgba(2,104,244,1) 0%, rgba(170,226,255,1) 100%)',
                            }}
                        ></div>
                    </div>
                </>
            )}
        </div>
    );
};
