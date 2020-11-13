import React, { useContext } from 'react';
import { TaskComponent } from './TaskComponent';
import { AddTask } from './AddTask';

import './projectStyle.css';

import { GlobalContext } from '../../context/GlobalState.js';

import addCircle from '../../assets/addCircle.png';

export const TaskList = () => {
    const { tasks, negateSeenProject, seenProject } = useContext(GlobalContext);

    return (
        <div>
            <ul className="project-list">
                {tasks.map(task => (<TaskComponent key={task.id} task={task} />))}
                

                <div className="btn" onClick={negateSeenProject}>
                    <button>
                        <img src={addCircle} alt="Add Circle" className="add-task-btn" />
                    </button>
                </div>
                {seenProject ? <AddTask toggle={negateSeenProject} /> : null}
            </ul>
            
        </div>
    )
}
