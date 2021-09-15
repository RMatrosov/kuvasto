import {SET_LOGGED_IN} from "../../constants/constants";


export interface ISetLoggedIn {
    type: typeof SET_LOGGED_IN,
    payload: boolean
}

export const setLoggedIn = (value: boolean): ISetLoggedIn => ({
    type: SET_LOGGED_IN,
    payload: value,
});