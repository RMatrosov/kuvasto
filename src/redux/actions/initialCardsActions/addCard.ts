import {ADD_CARD} from "../../constants/constants";
import {ICard} from "../../../types/cardType";


export interface TAddCard {
    type: typeof ADD_CARD,
    payload: ICard
}

export const addCard = (card: ICard): TAddCard => ({
    type: ADD_CARD,
    payload: card,
});