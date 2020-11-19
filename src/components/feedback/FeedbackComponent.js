import React from 'react';

import './feedbackStyle.css';

export const FeedbackComponent = ({ comment }) => {
    return (
        <div className="feedback-component-wrapper">
            <h2>{comment.subject}</h2>
            <p>{comment.text}</p>
        </div>
    );
};
