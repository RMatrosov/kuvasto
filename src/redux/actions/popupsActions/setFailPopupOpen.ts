import {SET_FAIL_POPUP_OPEN} from "../../constants/constants";


export interface ISetFailPopupOpen {
    type: typeof SET_FAIL_POPUP_OPEN,
    payload: boolean
}

export const setFailPopupOpen = (value: boolean): ISetFailPopupOpen => ({
    type: SET_FAIL_POPUP_OPEN,
    payload: value,
});

