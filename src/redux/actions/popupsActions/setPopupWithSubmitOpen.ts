import {SET_POPUP_WITH_SUBMIT_OPEN} from "../../constants/constants";


export interface ISetPopupWithSubmitOpen {
    type: typeof SET_POPUP_WITH_SUBMIT_OPEN,
    payload: boolean
}

export const setPopupWithSubmitOpen = (value: boolean): ISetPopupWithSubmitOpen => ({
    type: SET_POPUP_WITH_SUBMIT_OPEN,
    payload: value,
});