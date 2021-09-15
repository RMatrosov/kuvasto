import {setIsEditProfilePopupOpen} from "./setIsEditProfilePopupOpen";
import {setIsAddPlacePopupOpen} from "./setIsAddPlacePopupOpen";
import {setIsEditAvatarPopupOpen} from "./setIsEditAvatarPopupOpen";
import {setPopupWithSubmitOpen} from "./setPopupWithSubmitOpen";
import {setSuccessPopupOpen} from "./setSuccessPopupOpen";
import {setFailPopupOpen} from "./setFailPopupOpen";
import {closeAllPopupsState} from "./closeAllPopupsState";


export type TPopupsAction = ReturnType<
    | typeof setIsEditProfilePopupOpen
    | typeof setIsAddPlacePopupOpen
    | typeof setIsEditAvatarPopupOpen
    | typeof setPopupWithSubmitOpen
    | typeof setSuccessPopupOpen
    | typeof setFailPopupOpen
    | typeof closeAllPopupsState
    >

