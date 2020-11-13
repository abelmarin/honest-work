import { Link } from 'react-router-dom';
import React, { useContext } from 'react';

import './feedbackStyle.css';

import { GlobalContext } from '../../context/GlobalState.js';


export const FeedbackComponent = ({ comment }) => {
    const { deleteComment } = useContext(GlobalContext);

    return (
            <div className="feedback-component-wrapper">
                {comment.subject}
                {comment.text}
            </div>
    );
};
