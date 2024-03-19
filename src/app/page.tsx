"use client";
import React, { useEffect, useRef } from "react";
import Information from "./components/information";
import ScrollIndicator from "./components/scrollindicator";

const Home = () => {
    const presentation = {
        title: "Dynamic Title 1",
        description: "This is some dynamic content 1.",
    };
    const info = {
        title: "Dynamic Title 1",
        description: "This is some dynamic content 1.",
    };

    useEffect(() => {
        const options = {
            rootMargin: "0px",
            threshold: 0.5,
        };

        const handleIntersect = (
            entries: IntersectionObserverEntry[],
            observer: IntersectionObserver
        ) => {
            entries.forEach((entry) => {
                const target = entry.target as HTMLElement;
                if (entry.isIntersecting) {
                    target.style.animation = "zoomIn 0.5s forwards";
                } else {
                    target.style.animation = "none";
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, options);
        const informationContainers = document.querySelectorAll(".information-container");

        informationContainers.forEach((container) => {
            observer.observe(container);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="wrapper">
            <ScrollIndicator />
            <h1 className="front">Front </h1>
            <h1 className="end">End </h1>
            <h2 className="dev">Developer</h2>
            <img src="./testing.svg" alt="Test Image" />
            <div className="graph-container">
                <div className="graph"></div>
            </div>
            <main className="relative">
                <div className="main-content">
                    <div className="information-container">
                        <Information content={presentation} />
                        <Information content={info} />
                    </div>
                    <div className="information-container">
                        <Information content={presentation} />
                        <Information content={info} />
                    </div>
                    <div className="information-container">
                        <Information content={presentation} />
                        <Information content={info} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
