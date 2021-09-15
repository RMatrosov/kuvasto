import {SET_CARDS} from "../../constants/constants";
import {ICard} from "../../../types/cardType";


export interface TSetInitialCards {
    type: typeof SET_CARDS,
    payload: ICard[]
}


export const setInitialCards = (cards: ICard[]): TSetInitialCards => ({
    type: SET_CARDS,
    payload: cards,
});