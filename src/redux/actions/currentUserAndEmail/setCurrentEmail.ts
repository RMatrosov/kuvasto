import {SET_CURRENT_EMAIL} from "../../constants/constants";


export interface ISetCurrentEmail {
    type: typeof SET_CURRENT_EMAIL,
    payload: string
}

export const setCurrentEmail = (value: string): ISetCurrentEmail => ({
    type: SET_CURRENT_EMAIL,
    payload: value,
});