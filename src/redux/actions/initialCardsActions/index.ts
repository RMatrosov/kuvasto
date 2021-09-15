import {setInitialCards} from "./setInitialCards";
import {addCard} from "./addCard";
import {deleteCard} from "./deleteCard";
import {likeCard} from "./likeCard";
import {setIsLoading} from "./setIsLoading";


export type TInitialCardsActions = ReturnType<
    | typeof setInitialCards
    | typeof addCard
    | typeof deleteCard
    | typeof likeCard
    | typeof setIsLoading
    >