import React, { useContext } from 'react';
import { FeedbackComponent } from './FeedbackComponent';
import { AddFeedback } from './AddFeedback';

import './feedbackStyle.css';

import { GlobalContext } from '../../context/GlobalState.js';

import addCircle from '../../assets/addCircle.png';

export const FeedbackList = () => {
    const { comments, negateSeenComment, seenComment } = useContext(GlobalContext);

    return (
        <ul className="feedback-list">
            {comments.map(comment => (<FeedbackComponent key={comment.id} comment={comment} />))}
            
            <button className="add-feedback" onClick={negateSeenComment} >
                <img src={addCircle} className="add-feedback-btn" alt="Add Circle" />
                <div>Add Feedback</div>
            </button>

            {seenComment ? <AddFeedback toggle={negateSeenComment} /> : null}
        </ul>
            
    )
}
