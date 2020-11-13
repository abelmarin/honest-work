export default (state, action) => {
    switch(action.type) {
        case 'DELETE_PROJECT':
            return {
                ...state,
                projects: state.projects.filter(project => project.id !== action.payload)
            }
        case 'ADD_PROJECT':
            return {
                ...state,
                projects: [action.payload, ...state.projects]
            }
        case 'NEGATE_SEEN_HOME':
            return {
                ...state,
                seenHome: !state.seenHome
            }
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            }
        case 'NEGATE_SEEN_PROJECT':
            return {
                ...state,
                seenProject: !state.seenProject
            }
        case 'DELETE_COMMENT':
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.payload)
            }
        case 'ADD_COMMENT':
            return {
                ...state,
                comments: [action.payload, ...state.comments]
            }
        case 'NEGATE_SEEN_COMMENT':
            return {
                ...state,
                seenComment: !state.seenComment
            }
        default:
            return state;
    }
}