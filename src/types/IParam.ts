import {ILanguage} from "../languages/language";

export interface IParam {
    name: string
    title: string | ILanguage
    buttonText: string | ILanguage
    buttonLoadingText: string | ILanguage
    formName: string
}