import {SET_EDIT_PROFILE_POPUP_OPEN} from "../../constants/constants";


export interface ISetIsEditProfilePopupOpen {
    type: typeof SET_EDIT_PROFILE_POPUP_OPEN,
    payload: boolean
}

export const setIsEditProfilePopupOpen = (value: boolean): ISetIsEditProfilePopupOpen => ({
    type: SET_EDIT_PROFILE_POPUP_OPEN,
    payload: value,
});

