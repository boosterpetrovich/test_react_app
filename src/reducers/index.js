import { combineReducers } from 'redux'
import { SET_USER_PROFILE } from '../actions/ActionTypes'

const initialState = {
    data: {
        currentUser: {
            uid: null,
            displayName: null,
            email: null,
            photoURL: null
        }
    },
    ui: {
        auth: {
            is_loading: true
        }
    }
}

const currentUser = (state = initialState.data.currentUser, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                uid: action.data.uid,
                displayName: action.data.displayName,
                email: action.data.email,
                photoURL: action.data.photoURL
            }
            break;
        default:
            return state;

    }
}

export default combineReducers({
    currentUser
});
