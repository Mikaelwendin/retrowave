import Image from "next/image";
import React from "react";

interface ContentProps {
    title: string;
    description: any;
    images?: string[];
    starRatings?: number[];
    titleClass?: string;
    descriptionClass?: string;
    imageClass?: string;
}

const Information: React.FC<{ content: ContentProps }> = ({ content }) => {
    return (
        <div className="information-wrapper">
            <h3 className={content.titleClass}>{content.title}</h3>
            <p className={content.descriptionClass}>{content.description}</p>
            <div className="image-container">
                {content.images &&
                    content.images.map((imageUrl, index) => (
                        <div key={index} className="image-wrapper">
                            <Image
                                width={300}
                                height={300}
                                className={content.imageClass}
                                src={imageUrl}
                                alt={`Image ${index + 1}`}
                            />
                            {content.starRatings && content.starRatings[index] > 0 && (
                                <div className="star-rating">
                                    {Array(content.starRatings[index])
                                        .fill(null)
                                        .map((_, starIndex) => (
                                            <span key={starIndex} className="star">
                                                &#9733;
                                            </span>
                                        ))}
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Information;
