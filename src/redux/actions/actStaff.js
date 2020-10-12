import { ADD_ONE_STAFF } from '../actionTypes';

export const addStaff = (staffInfo) => {
    return {
        type: ADD_ONE_STAFF,
        staffInfo,
    }
}