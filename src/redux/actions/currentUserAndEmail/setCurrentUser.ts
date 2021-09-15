import {SET_USER} from "../../constants/constants";
import {IUser} from "../../../types/currentUserAndEmailTypes";


export interface ISetCurrentUser {
    type: typeof SET_USER,
    payload: IUser
}

export const setCurrentUser = (value: IUser): ISetCurrentUser => ({
    type: SET_USER,
    payload: value,
});