import streams from '../apis/streams';
import ActionTypes from '../actions/types';

export const signIn = (userId) => {
    return {
        type: ActionTypes.SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: ActionTypes.SIGN_OUT
    }
}

export const createStream = data => async dispatch => {
    const response = await streams.post('/streams', data);
    dispatch({ action: ActionTypes.CREATE_STREAM, payload: response.data})
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({ action: ActionTypes.FETCH_STREAMS, payload: response.data})
}

export const fetchStream = id => async dispatch => {
    const response = await streams.get('/streams/' + id);
    dispatch({ action: ActionTypes.FETCH_STREAM, payload: response.data})
}

export const editStream = (id, data) => async dispatch => {
    const response = await streams.put('/streams/' + id, data);
    dispatch({ action: ActionTypes.EDIT_STREAM, payload: response.data})
}

export const deleteStream = id => async dispatch => {
    await streams.delete('/streams' + id);
    dispatch({ action: ActionTypes.DELETE_STREAM, payload: id})
}
