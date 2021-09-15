import {ADD_CARD, DELETE_CARD, LIKE_CARD, SET_CARDS, SET_LOADING} from "../constants/constants";
import {TAction} from "../actions";
import {IInitialCards} from "../../types/cardType";


const initialState: IInitialCards = {
    cards: [],
    isLoading: false
}


const initialCards = (state = initialState, action: TAction): IInitialCards => {
    switch (action.type) {
        case SET_CARDS:
            return {
                ...state,
                cards: action.payload
            };
        case ADD_CARD:
            return {
                ...state,
                cards: [action.payload, ...state.cards]
            };
        case DELETE_CARD:
            return {
                ...state,
                cards: action.payload
            };
        case LIKE_CARD:
            return {
                ...state,
                cards: action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}

export default initialCards;