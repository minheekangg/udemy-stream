import ActionTypes from '../actions/types';
import _ from 'lodash';

export default (state={}, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_STREAM: 
        case ActionTypes.CREATE_STREAM:
        case ActionTypes.EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case ActionTypes.DELETE_STREAM:
            return _.omit(state, action.payload);
        case ActionTypes.FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        default: 
            return state;
    }
}