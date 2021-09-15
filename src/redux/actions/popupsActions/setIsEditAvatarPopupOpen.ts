import {SET_EDIT_AVATAR_POPUP_OPEN} from "../../constants/constants";


export interface ISetIsEditAvatarPopupOpen {
    type: typeof SET_EDIT_AVATAR_POPUP_OPEN,
    payload: boolean
}

export const setIsEditAvatarPopupOpen = (value: boolean): ISetIsEditAvatarPopupOpen => ({
    type: SET_EDIT_AVATAR_POPUP_OPEN,
    payload: value,
});
