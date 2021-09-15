import {SET_CARD_TO_DELETE,} from "../../constants/constants";
import {ICard} from "../../../types/cardType";


export interface ISetCardToDelete {
    type: typeof SET_CARD_TO_DELETE,
    payload: ICard
}

export const setCardToDelete = (value: ICard): ISetCardToDelete => ({
    type: SET_CARD_TO_DELETE,
    payload: value,
});