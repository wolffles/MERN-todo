import { GET_TASKS, ADD_TASK, DELETE_ITEM } from './types';

export const getTasks = () => {
    return {
        type: GET_TASKS // this return is going to our taskReducer and checking action.type
    }
}