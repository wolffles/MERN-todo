import uuid from 'uuid';
import { GET_TASKS, ADD_TASK, DELETE_TASK } from '../actions/types';
const initialState = {
    tasks: [],
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TASKS: 
            return { 
                ...state // we use a spread operator cuz we can mutate the state we have to basically make a copy of it. data flow is one directional.
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            }
        default: 
            return state;
    }
}