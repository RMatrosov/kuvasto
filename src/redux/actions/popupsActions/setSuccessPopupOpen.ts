import {SET_SUCCESS_POPUP_OPEN} from "../../constants/constants";


export interface ISetSuccessPopupOpen {
    type: typeof SET_SUCCESS_POPUP_OPEN,
    payload: boolean
}

export const setSuccessPopupOpen = (value: boolean): ISetSuccessPopupOpen => ({
    type: SET_SUCCESS_POPUP_OPEN,
    payload: value,
});