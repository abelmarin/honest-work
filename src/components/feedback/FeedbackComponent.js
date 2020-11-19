import React, { useContext } from 'react';

import './feedbackStyle.css';

import { GlobalContext } from '../../context/GlobalState.js';


export const FeedbackComponent = ({ comment }) => {
    const { deleteComment } = useContext(GlobalContext);

    return (
        <div className="feedback-component-wrapper">
            <h2>{comment.subject}</h2>
            <p>{comment.text}</p>
        </div>
    );
};
