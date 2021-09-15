export interface IUser {
    about: string
    avatar: string
    cohort: string
    name: string
    _id: string
}

export interface IProfile {
    userName: string
    description: string
}

export type TCurrentUserAndEmail = {
    user: IUser
    currentEmail: string,
}