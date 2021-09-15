import {SET_CARD_TO_DELETE, SET_LOADING_BTN, SET_LOGGED_IN, SET_SELECTED_CARD} from "../constants/constants";
import {TAction} from "../actions";
import {TCardSettings} from "../../types/cardSettingsTypes";


const initialState: TCardSettings = {
    selectedCard: null,
    cardToDelete: null,
    loadingBtn: false,
    loggedIn: false,
}

const cardSettings = (state = initialState, action: TAction) => {
    switch (action.type) {
        case SET_SELECTED_CARD:
            return {
                ...state,
                selectedCard: action.payload
            }
        case SET_CARD_TO_DELETE:
            return {
                ...state,
                cardToDelete: action.payload
            }
        case SET_LOADING_BTN:
            return {
                ...state,
                loadingBtn: action.payload
            }
        case SET_LOGGED_IN:
            return {
                ...state,
                loggedIn: action.payload
            }
        default:
            return state
    }
}

export default cardSettings