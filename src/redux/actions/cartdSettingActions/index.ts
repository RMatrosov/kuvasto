import {setLoggedIn} from "./setLoggedIn";
import {setLoadingBtn} from "./setLoadingBtn";
import {setCardToDelete} from "./setCardToDelete";
import {setSelectedCard} from "./setSelectedCard";


export type TCardSettingsAction = ReturnType<
    | typeof setLoggedIn
    | typeof setLoadingBtn
    | typeof setCardToDelete
    | typeof setSelectedCard
    >