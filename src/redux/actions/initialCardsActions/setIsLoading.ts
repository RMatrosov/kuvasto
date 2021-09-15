
import { SET_LOADING} from "../../constants/constants";


export interface ISetIsLoading {
    type: typeof SET_LOADING,
    payload: boolean
}

export const setIsLoading = (cards: boolean): ISetIsLoading => ({
    type: SET_LOADING,
    payload: cards,
});