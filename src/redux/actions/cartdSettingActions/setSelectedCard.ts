import {SET_SELECTED_CARD} from "../../constants/constants";
import {ICard} from "../../../types/cardType";


export interface ISetSelectedCard {
    type: typeof SET_SELECTED_CARD,
    payload: ICard | null
}

export const setSelectedCard = (value: ICard | null): ISetSelectedCard => ({
    type: SET_SELECTED_CARD,
    payload: value,
});