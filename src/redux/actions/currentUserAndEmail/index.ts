
import {setCurrentEmail} from "./setCurrentEmail";
import {setCurrentUser} from "./setCurrentUser";

export type TCurrentUserAndEmailAction = ReturnType<
    | typeof setCurrentEmail
    | typeof setCurrentUser

    >