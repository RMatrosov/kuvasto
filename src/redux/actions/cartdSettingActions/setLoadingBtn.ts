import {SET_LOADING_BTN} from "../../constants/constants";


export interface ISetLoadingBtn {
    type: typeof SET_LOADING_BTN,
    payload: boolean
}

export const setLoadingBtn = (value: boolean): ISetLoadingBtn => ({
    type: SET_LOADING_BTN,
    payload: value,
});