import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILED
} from '../actions/register';

const initialState = {
    signingUp: false,
    id: null,
    error: null
}

export const registerReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_START:
            return {
                ...state,
                signingUp: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                id: action.payload,
                signingUp: false
            }
        case REGISTER_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
}