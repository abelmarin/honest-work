import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    //teams: [],
    users: [],
    projects: [],
    tasks: [],
    comments: [],
    seenHome: false,
    isLoggedIn: false,
    seenProject: false,
    seenFeedback: false
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions for home page
    function deleteProject(id) {
        dispatch({
            type: 'DELETE_PROJECT',
            payload: id
        });
    }

    function addProject(project) {
        dispatch({
            type: 'ADD_PROJECT',
            payload: project
        });
    }

    function negateSeenHome() {
        dispatch({
            type: 'NEGATE_SEEN_HOME',
        });
    }

    function negateLoggedIn() {
        dispatch({
            type: "NEGATE_LOGGED_IN"
        });
    }

    // Actions for users
    function deleteUser(id) {
        dispatch({
            type: 'DELETE_USER',
            payload: id
        });
    }

    function addUser(user) {
        dispatch({
            type: 'ADD_USER',
            payload: user
        });
    }


    // Actions for Project page
    function deleteTask(id) {
        dispatch({
            type: 'DELETE_TASK',
            payload: id
        });
    }

    function addTask(task) {
        dispatch({
            type: 'ADD_TASK',
            payload: task
        });
    }

    function negateSeenProject() {
        dispatch({
            type: 'NEGATE_SEEN_PROJECT',
        });
    }

    // Actions for Feedback page
    function deleteComment(id) {
        dispatch({
            type: 'DELETE_COMMENT',
            payload: id
        });
    }

    function addComment(comment) {
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment
        });
    }

    function negateSeenComment() {
        dispatch({
            type: 'NEGATE_SEEN_COMMENT',
        });
    }

    return (<GlobalContext.Provider value={{
        users: state.users,
        projects: state.projects,
        tasks: state.tasks,
        comments: state.comments,
        seenHome: state.seenHome,
        isLoggedIn: state.isLoggedIn,
        seenProject: state.seenProject,
        seenComment: state.seenComment,
        deleteProject,
        addProject,
        deleteUser,
        addUser,
        deleteTask,
        addTask,
        deleteComment,
        addComment,
        negateSeenHome,
        negateLoggedIn,
        negateSeenProject,
        negateSeenComment
    }}>
        {children}
    </GlobalContext.Provider>);
}