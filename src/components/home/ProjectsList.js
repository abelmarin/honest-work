import React, { useContext } from 'react';
import { ProjectComponent } from './ProjectComponent';
import { AddProject } from './AddProject';

import './homeStyle.css';

import { GlobalContext } from '../../context/GlobalState.js';

import addCircle from '../../assets/addCircle.png';

export const ProjectsList = () => {
    const { projects, negateSeenHome, seenHome } = useContext(GlobalContext);

    return (
        <div>
            <ul className="list">
                {projects.map(project => (<ProjectComponent key={project.id} project={project} />))}
                

                <div >
                    <button className="btn" onClick={negateSeenHome}>
                        <img src={addCircle} alt="Add Circle" className="add-project-btn" />
                    </button>
                </div>
                {seenHome ? <AddProject toggle={negateSeenHome} /> : null}
            </ul>
            
        </div>
    )
}
