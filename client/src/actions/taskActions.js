import axios from 'axios';
import { GET_TASKS, ADD_TASK, DELETE_TASK, TASKS_LOADING } from './types';

export const getTasks = () => dispatch => {
    // return {
    //     type: GET_TASKS // this return is going to our taskReducer and checking action.type
    // }

    dispatch(setTasksLoading()); 
    // .get makes request to endpoint using the proxy we created in the package.json to our backend.
    axios.get('/api/tasks').then(res => dispatch({
                type: GET_TASKS,
                payload: res.data
            }) // the .get router function in the back end returns a json promise which we then call .then getting the data and sending it as a payload to the dispatcher to reducer
            )
}

export const addTask = (task) => dispatch =>{
    // return {
    //     type: ADD_TASK,
    //     payload: task
    // }

    axios.post('/api/tasks', task )
        .then(res => 
            dispatch({
                type: ADD_TASK,
                payload: res.data
            }))
}

export const deleteTask = (id) => dispatch => {
    // return {
    //     type: DELETE_TASK,
    //     payload: id 
    // }
    axios.delete(`/api/tasks/${id}`).then(res => dispatch({
            type: DELETE_TASK,
            payload: id
        })
    )
}


export const setTasksLoading = () => {
    return {
        type: TASKS_LOADING
    }
}