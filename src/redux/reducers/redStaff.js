import {
    UPDATE_STAFF,
    LIST_STAFF,
} from '../actionTypes'
import _ from 'lodash';

const redStaff = (state = [], action) => {
    switch (action.type) {
        case LIST_STAFF:
            return state = action.employeestaff;
        case UPDATE_STAFF:
            var index = null;
            var array = [action.staffItem.drawernumber,action.staffItem.cardnumber,action.staffItem.username,action.staffItem.dept, action.staffItem.gender, action.staffItem.startDate];
            index = _.findIndex(action.employeestaff, function(staff) { 
                var newstaff = staff[0];
                return newstaff === action.staffItem.drawernumber;
             });
             action.employeestaff[index] = array;
             return state;
        default :
            return state;
    }
};

export default redStaff;