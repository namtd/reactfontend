import { LIST_STAFF,ADD_ONE_STAFF, EDIT_STAFF } from '../actionTypes';

export const addStaff = (staffInfo) => {
    return {
        type: ADD_ONE_STAFF,
        staffInfo,
    }
}
export const listStaff = (employeestaff) => {
    return {
        type: LIST_STAFF,
        employeestaff,
    }
}
export const editStaff = (employeestaff, staffId) => {
    return {
        type: EDIT_STAFF,
        employeestaff,
        staffId,
    }
}