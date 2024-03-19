"use client";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useRef } from "react";
import Information from "./components/information";
import ScrollIndicator from "./components/scrollindicator";

const Home = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const presentation = {
        title: "Dynamic Title 2",
        description: "This is some dynamic content 2.",
    };
    const info = {
        title: "Dynamic Title 1",
        description: "This is some dynamic content 1.",
    };
    const info2 = {
        title: "hej",
        description: "This hej.",
    };
    const presentation2 = {
        title: "tjena",
        description: "lol.",
    };
    const info3 = {
        title: "asdfasfd",
        description: "asdfasdfsadf hej.",
    };
    const presentation3 = {
        title: "sadfasdfasdf",
        description: "loasdfasdl.",
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
        const informationContainers = document.querySelectorAll(".embla");

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
            <img src="./sunrise.svg" alt="Test Image" />
            <div className="graph-container">
                <div className="graph"></div>
            </div>
            <main className="relative">
                <div className="main-content">
                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container">
                            <div className="embla__slide information-container" key="1">
                                <Information content={presentation} />
                                <Information content={info} />
                            </div>
                            <div className="embla__slide information-container" key="2">
                                <Information content={presentation2} />
                                <Information content={info2} />
                            </div>
                            <div className="embla__slide information-container" key="3">
                                <Information content={presentation3} />
                                <Information content={info3} />
                            </div>
                        </div>
                        <div className="button-container">
                            <button className="embla__prev btn" onClick={scrollPrev}>
                                Prev
                            </button>
                            <button className="embla__next btn" onClick={scrollNext}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
