import {IUser} from "./currentUserAndEmailTypes";


export interface ICard {
    createdAt: string
    likes: IUser[]
    link: string
    owner: IUser
    _id: string
    name:string
}

export interface IInitialCards {
    cards: ICard[]
    isLoading: boolean
}