

const SET_LANG = 'SET_LANG'

type ILang = {
    selectedLang: string
}

type TSetLang = {
    type: typeof SET_LANG
    payload: string,
}

const initialState: ILang = {
    selectedLang: 'ru'
}

export const langReducer = (state = initialState, action: TSetLang) => {

    switch (action.type) {
        case SET_LANG:
            return {
                ...state,
                selectedLang: action.payload
            }
        default:
            return state
    }
}


export const setLang = (value: string): TSetLang => ({
    type: SET_LANG,
    payload: value,
})