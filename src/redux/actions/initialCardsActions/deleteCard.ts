
import {DELETE_CARD} from "../../constants/constants";
import {ICard} from "../../../types/cardType";



export interface TDeleteCard {
    type: typeof DELETE_CARD,
    payload: ICard[]
}


export const deleteCard = (cards: ICard[]): TDeleteCard => ({
    type: DELETE_CARD,
    payload: cards,
});