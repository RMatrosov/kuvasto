import {SET_CURRENT_EMAIL, SET_USER} from "../constants/constants";
import {TAction} from "../actions";
import {TCurrentUserAndEmail} from "../../types/currentUserAndEmailTypes";

const initialState: TCurrentUserAndEmail = {
    user: {
        about: '',
        avatar: '',
        cohort: '',
        name: '',
        _id: '',
    },
    currentEmail: '',
}

const currentUser = (state = initialState, action: TAction): TCurrentUserAndEmail => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_CURRENT_EMAIL:
            return {
                ...state,
                currentEmail: action.payload
            }

        default:
            return state
    }

}

export default currentUser