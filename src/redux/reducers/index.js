import { combineReducers } from 'redux';
import redStaff from './redStaff';
import editStaff from './editStaff';

export default combineReducers({
    redStaff,
    editStaff,
})