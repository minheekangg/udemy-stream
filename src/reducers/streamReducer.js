import { ActionTypes } from '../actions/types';

export default (state={}, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_STREAM: 
        case ActionTypes.CREATE_STREAM:
        case ActionTypes.EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        default: 
            return state;
    }
}