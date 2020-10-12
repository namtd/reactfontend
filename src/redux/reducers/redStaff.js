import { addStaff } from '../actions/actStaff';
import {
    ADD_ONE_STAFF,
    ADD_MANY_STAFF,
    UPDATE_STAFF,
    DELETE_STAFF,
} from '../actionTypes'

let state = [];

const redStaff = (state = [], action) => {
    switch (action.type) {
        case ADD_ONE_STAFF :
            return [
                ...state,
                {
                    username: action.staffInfo.username,
                    dept: action.staffInfo.dept,
                    id: action.staffInfo.id,
                    gender: action.staffInfo.gender,
                    startDate: action.staffInfo.startDate,
                    note: action.staffInfo.note,
                }
            ]
        default :
            return state;
    }
};

export default redStaff;