import { GET_TASKS, ADD_TASK, DELETE_TASK } from './types';

export const getTasks = () => {
    return {
        type: GET_TASKS // this return is going to our taskReducer and checking action.type
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id 
    }
}

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}