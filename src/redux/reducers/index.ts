import {combineReducers} from 'redux'
import initialCards from "./initialCard";
import currentUser from "./currentUser";
import popups from "./popups";
import cardSettings from "./cardSettings";
import {langReducer} from "./language";

export type RootReducerType = typeof rootReducer

const rootReducer = combineReducers({
    initialCards: initialCards,
    currentUser: currentUser,
    popups: popups,
    cardSettings: cardSettings,
    langReducer:langReducer

});

export default rootReducer;