import { SET_JOB, ADD_JOB, DEL_JOB } from './constants'

export const setJob = payload => { // dữ liệu mang theo đi => {
    return {
        type: SET_JOB,
        payload
    }
}

export const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

export const delJob = payload => {
    return {
        type: DEL_JOB,
        payload
    }
}