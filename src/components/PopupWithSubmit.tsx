import PopupWithForm from "./PopupWithForm";
import {useSelector} from "react-redux";
import {selectPopups} from "../redux/selectors/selectPopups";
import React, {FC, SyntheticEvent} from "react";
import {ICard} from "../types/cardType";
import {selectCardSettings} from "../redux/selectors/selectCardSettings";

type TPopupWithSubmitProps = {
    onClose(event: SyntheticEvent): void
    onSubmit(arg: ICard | null): void
    cardToDelete: ICard | null
}


const PopupWithSubmit: FC<TPopupWithSubmitProps> = ({onSubmit, onClose, cardToDelete}) => {

    const {isPopupWithSubmitOpen} = useSelector(selectPopups)

    const {loadingBtn} = useSelector(selectCardSettings)

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        onSubmit(cardToDelete)
    }

    return (
        <PopupWithForm isOpen={isPopupWithSubmitOpen}
                       params={{
                           name: 'type_confirmation',
                           title: 'Вы уверены?',
                           buttonText: 'Да',
                           buttonLoadingText: '...',
                           formName: "type_confirmation"
                       }}
                       onClose={onClose}
                       isValid={true}
                       loadingBtn={loadingBtn}
                       onSubmit={handleSubmit}>

        </PopupWithForm>
    )
}

export default PopupWithSubmit