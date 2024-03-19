import React from "react";

interface ScrollArrowProps {
    direction: "up" | "down";
    onClick: () => void;
}

const ScrollArrow: React.FC<ScrollArrowProps> = ({ direction, onClick }) => {
    return (
        <div className={`scroll-arrow ${direction}`} onClick={onClick}>
            {direction === "up" && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                    <path d="M12 8l-8 8h16z" />
                </svg>
            )}
            {direction === "down" && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                    <path d="M12 16l8-8H4z" />
                </svg>
            )}
        </div>
    );
};

export default ScrollArrow;
