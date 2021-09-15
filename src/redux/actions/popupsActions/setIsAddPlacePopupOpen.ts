import {SET_ADD_PLACE_POPUP_OPEN} from "../../constants/constants";


export interface ISetIsAddPlacePopupOpen {
    type: typeof SET_ADD_PLACE_POPUP_OPEN,
    payload: boolean
}

export const setIsAddPlacePopupOpen = (value: boolean): ISetIsAddPlacePopupOpen => ({
    type: SET_ADD_PLACE_POPUP_OPEN,
    payload: value,
});
