import {
    EDIT_STAFF,
} from '../actionTypes';
import _ from 'lodash';
const redStaff = (state = '', action) => {
    switch (action.type) {
        case EDIT_STAFF:
            var result = null;
            _.filter(action.employeestaff, function(staff) { 
                var newstaff = staff[0];
                if(action.staffId === newstaff){
                    result  = {
                        "drawernumber":  staff[0], 
                        "username" :  staff[2],
                        "cardnumber":  staff[1],
                        "dept":  staff[3],
                        "gender":  staff[4],
                        "startDate": staff[5],
                    };
                }
                state = result;
             });
             return state;
        default :
            return state;
    }
};

export default redStaff;