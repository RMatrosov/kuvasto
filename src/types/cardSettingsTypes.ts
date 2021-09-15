import {ICard} from "./cardType";

export interface TCardSettings {
    selectedCard: ICard | null
    cardToDelete: ICard | null
    loadingBtn: boolean
    loggedIn: boolean
}