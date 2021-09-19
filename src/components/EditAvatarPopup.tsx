import PopupWithForm from "./PopupWithForm";
import React, {FC, SyntheticEvent, useEffect} from "react";
import {useSelector} from "react-redux";
import {selectPopups} from "../redux/selectors/selectPopups";
import {selectCardSettings} from "../redux/selectors/selectCardSettings";
import {IAvatar} from "../types/IAvatar";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useTranslation} from "react-i18next";


type TEditAvatarPopup = {
    onClose(event: SyntheticEvent): void
    onUpdateAvatar: (avatar: IAvatar) => void
}

interface IFormInputs {
    avatar: string
}

const EditAvatarPopup: FC<TEditAvatarPopup> = (props) => {
    const {t} = useTranslation();

    const avatarPopupSchema = yup.object().shape({
        avatar: yup.string()
            .url(t("addPlaceSchema.link"))
            .required(t("addPlaceSchema.linkReq")),
    });

    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm<IFormInputs>({
        resolver: yupResolver(avatarPopupSchema),
        mode: "onChange",
    });

    const {isEditAvatarPopupOpen} = useSelector(selectPopups)
    const {loadingBtn} = useSelector(selectCardSettings)

    useEffect(() => {
        reset()
    }, [reset, isEditAvatarPopupOpen]);

    const onSubmit = handleSubmit(data => {
        props.onUpdateAvatar({
            avatar: data.avatar,
        });
    });

    return (
        <PopupWithForm isOpen={isEditAvatarPopupOpen}
                       onClose={props.onClose}
                       loadingBtn={loadingBtn}
                       onSubmit={onSubmit}
                       isValid={isValid}
                       params={{
                           name: 'type_avatar',
                           title: `${t("editAvatarPopup.title")}`,
                           buttonText: `${t("editAvatarPopup.buttonText")}`,
                           buttonLoadingText: `${t("editAvatarPopup.buttonLoadingText")}`,
                           formName: "change-avatar"
                       }}>

            <input type="url" className="form__input" id="avatar"
                   {...register("avatar", {required: true})}
                   placeholder={t("editAvatarPopup.placeholderLink")}/>
            <p className="form__input-error avatar-input-error">{errors.avatar?.message}</p>

        </PopupWithForm>
    )
}

export default EditAvatarPopup