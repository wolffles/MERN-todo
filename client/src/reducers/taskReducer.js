import { GET_TASKS, ADD_TASK, DELETE_TASK, TASKS_LOADING } from '../actions/types';
const initialState = {
    tasks: [],
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TASKS: 
            return { 
                ...state, // we use a spread operator cuz we can mutate the state we have to basically make a copy of it. data flow is one directional.
                tasks: action.payload, // so we copy the initial state then we copy the items array and set it to the action.payload we got from taskActions.js.
                loading: false
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task._id !== action.payload)
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            }
        case TASKS_LOADING:
            return {
                ...state,
                loading: true
            }
        default: 
            return state;
    }
}