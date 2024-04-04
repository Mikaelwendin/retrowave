"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";
import { DotButton, useDotButton } from "./components/emblabuttons";
import Footer from "./components/footer";
import Information from "./components/information";
import ScrollIndicator from "./components/scrollindicator";

const Home = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const [emblaRefTwo, emblaApiTwo] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollPrevTwo = () => {
        if (emblaApiTwo) emblaApiTwo.scrollPrev();
    };

    const scrollNextTwo = () => {
        if (emblaApiTwo) emblaApiTwo.scrollNext();
    };

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    const presentation = {
        title: "Tech Stack",
        description: "",
        images: [
            "/angular.svg",
            "/react.svg",
            "/next.svg",
            "/vue.svg",
            "/sass.svg",
            "/html-5.svg",
            "/mongodb.svg",
        ],
        imageClass: "logo",
        starRatings: [3, 3, 2, 2, 4, 4, 1],
    };
    const info = {
        title: "Projects",
        description:
            "Here are a few of the projects I've worked on as part of my front-end education. I'm constantly working on new projects, so check back often for updates! To see what's currently in progress, visit my GitHub page.",
    };

    const info2 = {
        title: "FlavorForge",
        description: (
            <a href="https://mikaelwendin.github.io/flavorforge/" target="_blank" rel="noopener">
                <Image src={"/flavor.png"} height={400} width={400} alt="Flavorforge"></Image>{" "}
            </a>
        ),
    };
    const presentation2 = {
        title: "About me",
        description: "Hello everyone, I'm Mikael",
        images: ["/cv.webp"],
        imageClass: "portrait",
    };
    const info3 = {
        title: "Mini-game",
        description: (
            <a href="https://mini-game-lime.vercel.app/" target="_blank" rel="noopener">
                <Image src={"/tictactoe.png"} height={400} width={400} alt="Flavorforge"></Image>{" "}
            </a>
        ),
    };
    const presentation3 = {
        title: "Experience",
        description: `
        I'm a Frontend developer with a solid foundation in web development. I made a career transition into this field after completing a 2-year vocational education program in frontend development.
        
        Since September 2023, I've been interning at iQuest, a fast growing propTech company, where I've had the opportunity to apply my knowledge in a professional setting. At iQuest, I've primarily worked with Angular, developing applications to streamline property management processes. It's been an exhilarating journey, collaborating with talented colleagues and contributing to innovative solutions that enhance property management efficiency.
        
        Prior to my internship, I dedicated time to completing additional courses in web development and programming, further expanding my skill set and staying abreast of the latest industry trends. I'm passionate about frontend development and excited about the endless possibilities it offers for creating intuitive and impactful user experiences.
        
        Looking ahead, I'm eager to continue growing as a frontend developer, exploring new technologies, and contributing to projects that make a meaningful difference. Let's connect and embark on this journey together!
        `,
    };

    useEffect(() => {
        const options = {
            rootMargin: "0px",
            threshold: 0.2,
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
            <Image
                src="./sunrise.svg"
                alt="Test Image"
                className="bg-sunrise"
                width={500}
                height={500}
            />
            <div className="graph-container">
                <div className="graph"></div>
            </div>
            <main className="relative">
                <div className="main-content">
                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container">
                            <div className="embla__slide information-container" key="1">
                                <Information content={presentation2} />
                            </div>
                            <div className="embla__slide information-container" key="2">
                                <Information content={presentation3} />
                            </div>
                            <div className="embla__slide information-container" key="3">
                                <Information content={presentation} />
                            </div>
                        </div>
                        {/* <div className="button-container">
                            <button className="embla__prev btn" onClick={scrollPrev}>
                                Prev
                            </button>
                            <button className="embla__next btn" onClick={scrollNext}>
                                Next
                            </button>
                        </div> */}
                        <div className="embla__dots">
                            {scrollSnaps.map((_, index) => (
                                <DotButton
                                    key={index}
                                    onClick={() => onDotButtonClick(index)}
                                    className={"embla__dot".concat(
                                        index === selectedIndex ? " embla__dot--selected" : ""
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="embla" ref={emblaRefTwo}>
                        <div className="embla__container">
                            <div className="embla__slide information-container" key="1">
                                <Information content={info} />
                            </div>
                            <div className="embla__slide information-container" key="2">
                                <Information content={info2} />
                            </div>
                            <div className="embla__slide information-container" key="3">
                                <Information content={info3} />
                            </div>
                        </div>
                        <div className="button-container">
                            <button className="embla__prev btn" onClick={scrollPrevTwo}>
                                Prev
                            </button>
                            <button className="embla__next btn" onClick={scrollNextTwo}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </main>
        </div>
    );
};

export default Home;
