import { Link } from 'react-router-dom';
import React, { useContext } from 'react';

import './homeStyle.css';

import { GlobalContext } from '../../context/GlobalState.js';


export const ProjectComponent = ({ project }) => {
    const { deleteProject } = useContext(GlobalContext);

    return (
            <Link to="/project" className="project-component">
                {project.text}
            </Link>
    );
};
