import { addStaff } from '../actions/actStaff';
import {
    ADD_ONE_STAFF,
    ADD_MANY_STAFF,
    UPDATE_STAFF,
    DELETE_STAFF,
    LIST_STAFF,
} from '../actionTypes'

let state ;

const redStaff = (state = [], action) => {
    switch (action.type) {
        case LIST_STAFF:
            return state = action.employeestaff;
        default :
            return state;
    }
};

export default redStaff;