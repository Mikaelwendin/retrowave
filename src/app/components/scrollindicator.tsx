import React, { useEffect, useState } from "react";

const ScrollIndicator = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updateScrollPosition = () => {
            const totalHeight =
                document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const currentPosition = (window.scrollY / totalHeight) * 100;
            setScrollPosition(currentPosition);
        };

        window.addEventListener("scroll", updateScrollPosition);

        return () => {
            window.removeEventListener("scroll", updateScrollPosition);
        };
    }, []);

    return (
        <>
            <div
                className="indicator left-indicator"
                style={{ transform: `translateY(${scrollPosition}%)` }}
            />
            <div
                className="indicator right-indicator"
                style={{ transform: `translateY(${scrollPosition}%)` }}
            />
        </>
    );
};

export default ScrollIndicator;
