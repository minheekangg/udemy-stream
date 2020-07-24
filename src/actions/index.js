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

export const createStream = data => async (dispatch, getState )=> {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...data, userId });

    dispatch({ type: ActionTypes.CREATE_STREAM, payload: response.data})
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({ type: ActionTypes.FETCH_STREAMS, payload: response.data})
}

export const fetchStream = id => async dispatch => {
    const response = await streams.get('/streams/' + id);
    dispatch({ type: ActionTypes.FETCH_STREAM, payload: response.data})
}

export const editStream = (id, data) => async dispatch => {
    const response = await streams.put('/streams/' + id, data);
    dispatch({ type: ActionTypes.EDIT_STREAM, payload: response.data})
}

export const deleteStream = id => async dispatch => {
    await streams.delete('/streams' + id);
    dispatch({ type: ActionTypes.DELETE_STREAM, payload: id})
}
