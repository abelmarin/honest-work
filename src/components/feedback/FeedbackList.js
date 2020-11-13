import React, { useContext } from 'react';
import { FeedbackComponent } from './FeedbackComponent';
import { AddFeedback } from './AddFeedback';

import './feedbackStyle.css';

import { GlobalContext } from '../../context/GlobalState.js';

import addCircle from '../../assets/addCircle.png';

export const FeedbackList = () => {
    const { comments, negateSeenComment, seenComment } = useContext(GlobalContext);

    return (
        <div>
            <ul className="list">
                {comments.map(comment => (<FeedbackComponent key={comment.id} comment={comment} />))}
                

                <div className="btn" onClick={negateSeenComment}>
                    <button>
                        <img src={addCircle} alt="Add Circle" className="add-feedback-btn" />
                    </button>
                </div>
                {seenComment ? <AddFeedback toggle={negateSeenComment} /> : null}
            </ul>
            
        </div>
    )
}
