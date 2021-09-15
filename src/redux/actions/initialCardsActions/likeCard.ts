import {LIKE_CARD} from "../../constants/constants";
import {ICard} from "../../../types/cardType";


export interface ILikeCard {
    type: typeof LIKE_CARD,
    payload: ICard[]
}


export const likeCard = (cards: ICard[]): ILikeCard => ({
    type: LIKE_CARD,
    payload: cards,
});