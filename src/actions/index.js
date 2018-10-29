import * as types from './ActionTypes'

export const setUserProfile = (user) => {
    return (
        {
            type: types.SET_USER_PROFILE,
            data: {
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            }
        }
    )
}
