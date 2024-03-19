// DynamicContent.tsx
import React from "react";

interface ContentProps {
    title: string;
    description: string;
}

const Information: React.FC<{ content: ContentProps }> = ({ content }) => {
    return (
        <div>
            <h3>{content.title}</h3>
            <p>{content.description}</p>
        </div>
    );
};

export default Information;
