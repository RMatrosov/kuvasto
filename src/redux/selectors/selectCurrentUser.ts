import {AppStateType} from "../store";

export const selectCurrentUser = (state:AppStateType) =>
    state.currentUser