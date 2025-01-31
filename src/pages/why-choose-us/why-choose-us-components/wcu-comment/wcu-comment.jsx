import { useState } from "react";
import "./wcu-comment.css"; // Ensure your styles are in place

const reviews = [
    {
        title: "Great Experience",
        content: "I had an amazing time learning with NSW SAFE. The instructor was patient and knowledgeable.",
        author: "John Doe",
        rating: 5
    },
    {
        title: "Highly Recommended",
        content: "NSW SAFE helped me pass my driving test on the first attempt. Their methods are effective.",
        author: "Jane Smith",
        rating: 5
    },
    {
        title: "Professional Service",
        content: "The instructors at NSW SAFE are true professionals. They make learning to drive easy and fun.",
        author: "Mike Johnson",
        rating: 5
    },
    {
        title: "Excellent Instructors",
        content: "I had a great experience learning to drive with NSW SAFE. The instructors are friendly and knowledgeable.",
        author: "Sarah Brown",
        rating: 5
    },
    {
        title: "Great Value for Money",
        content: "NSW SAFE offers great value for money. I highly recommend them to anyone looking to learn to drive.",
        author: "David Wilson",
        rating: 5
    },
    {
        title: "Friendly Instructors",
        content: "The instructors at NSW SAFE are friendly and patient. They make learning to drive a pleasant experience.",
        author: "Emily Jones",
        rating: 5
    }
];

const WhyChooseUsComment = () => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="wcu-comment-box">
            <h3 className="wcu-comment-title">What Our Students Say</h3>

            <div className="wcu-comment-card">
                <h4 className="wcu-comment-title">{reviews[index].title}</h4>

                <div className="wcu-star-box">
                    {"★".repeat(reviews[index].rating)}
                    {"☆".repeat(5 - reviews[index].rating)}
                </div>

                <p className="wcu-comment-content">"{reviews[index].content}"</p>
                <p className="wcu-comment-author">- {reviews[index].author}</p>

                <div className="wcu-arrow-box">
                    <button className="wcu-arrow-btn" onClick={handlePrev}>←</button>
                    <button className="wcu-arrow-btn" onClick={handleNext}>→</button>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUsComment;
