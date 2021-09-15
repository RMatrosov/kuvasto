import {CLOSE_ALL_POPUPS} from "../../constants/constants";


export interface ICloseAllPopupsState {
    type: typeof CLOSE_ALL_POPUPS,
    payload: boolean
}

export const closeAllPopupsState = (value: boolean): ICloseAllPopupsState => ({
    type: CLOSE_ALL_POPUPS,
    payload: value,
});

