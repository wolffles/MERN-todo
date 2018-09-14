import uuid from 'uuid';
import { GET_TASKS, ADD_TASK, DELETE_ITEM } from '../actions/types';
const initialState = {
    tasks: [
        { id: uuid(), name: "Laundry"},
        { id: uuid(), name: "Homework"},
        { id: uuid(), name: "Grocery Store"},
        { id: uuid(), name: "Rubix Cube"}
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TASKS: 
            return { 
                ...state
            }
        default: 
            return state;
    }
}