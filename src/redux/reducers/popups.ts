import {
    CLOSE_ALL_POPUPS,
    SET_ADD_PLACE_POPUP_OPEN,
    SET_EDIT_AVATAR_POPUP_OPEN,
    SET_EDIT_PROFILE_POPUP_OPEN, SET_FAIL_POPUP_OPEN, SET_POPUP_WITH_SUBMIT_OPEN, SET_SUCCESS_POPUP_OPEN
} from "../constants/constants";
import {TPopups} from "../../types/popupsTypes";
import {TAction} from "../actions";


const initialState: TPopups = {
    isEditProfilePopupOpen: false,
    isAddPlacePopupOpen: false,
    isEditAvatarPopupOpen: false,
    isPopupWithSubmitOpen: false,
    successPopupOpen: false,
    failPopupOpen: false
}

const popups = (state = initialState, action: TAction) => {
    switch (action.type) {
        case SET_EDIT_PROFILE_POPUP_OPEN:
            return {
                ...state,
                isEditProfilePopupOpen: action.payload
            };
        case SET_ADD_PLACE_POPUP_OPEN:
            return {
                ...state,
                isAddPlacePopupOpen: action.payload
            };
        case SET_EDIT_AVATAR_POPUP_OPEN:
            return {
                ...state,
                isEditAvatarPopupOpen: action.payload
            };
        case SET_POPUP_WITH_SUBMIT_OPEN:
            return {
                ...state,
                isPopupWithSubmitOpen: action.payload
            };
        case SET_SUCCESS_POPUP_OPEN:
            return {
                ...state,
                successPopupOpen: action.payload
            };
        case SET_FAIL_POPUP_OPEN:
            return {
                ...state,
                failPopupOpen: action.payload
            };
        case CLOSE_ALL_POPUPS:
            return {
                ...state,
                isPopupWithSubmitOpen: action.payload,
                isEditAvatarPopupOpen: action.payload,
                isAddPlacePopupOpen: action.payload,
                isEditProfilePopupOpen: action.payload,
                successPopupOpen: action.payload,
                failPopupOpen: action.payload
            };
        default:
            return state

    }
}

export default popups