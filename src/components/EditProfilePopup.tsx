import React, {FC, SyntheticEvent, useEffect} from "react";
import PopupWithForm from "./PopupWithForm";
import {useSelector} from "react-redux";
import {selectPopups} from "../redux/selectors/selectPopups";
import {selectCardSettings} from "../redux/selectors/selectCardSettings";
import {selectCurrentUser} from "../redux/selectors/selectCurrentUser";
import {IProfile} from "../types/currentUserAndEmailTypes";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useTranslation} from "react-i18next";


type TEditProfilePopupProps = {
    onUpdateUser: (arg: IProfile) => void
    onClose(event: SyntheticEvent): void
}

interface IFormInputs {
    userName: string
    description: string
}

const EditProfilePopup: FC<TEditProfilePopupProps> = (props) => {

    const {t} = useTranslation();

    const editProfilePopupSchema = yup.object().shape({
        userName: yup.string()
            .min(2, t("addPlaceSchema.title"))
            .required(t("addPlaceSchema.title")),
        description: yup.string()
            .min(2, t("addPlaceSchema.title"))
            .required(t("addPlaceSchema.description")),
    });

    const {register, formState: {errors}, handleSubmit, setValue} = useForm<IFormInputs>({
        resolver: yupResolver(editProfilePopupSchema),
        mode: "onChange",
    });

    const {user} = useSelector(selectCurrentUser)
    const {isEditProfilePopupOpen} = useSelector(selectPopups)
    const {loadingBtn} = useSelector(selectCardSettings)

    useEffect(() => {
        setValue("userName", user.name)
        setValue("description", user.about)
    }, [user, setValue, isEditProfilePopupOpen]);


    const onSubmit = handleSubmit(data => {
        props.onUpdateUser({
            userName: data.userName,
            description: data.description,
        });
    });

    return (
        <PopupWithForm isOpen={isEditProfilePopupOpen}
                       params={{
                           name: 'type_edit',
                           title: `${t("editProfilePopup.title")}`,
                           buttonText: `${t("editProfilePopup.buttonText")}`,
                           buttonLoadingText: `${t("editProfilePopup.buttonLoadingText")}`,
                           formName: "edit-profile"
                       }}
                       onClose={props.onClose}
                       loadingBtn={loadingBtn}
                       isValid={true}
                       onSubmit={onSubmit}>


            <input className="form__input" type='text' id="name"
                   {...register("userName", {required: true})}
                   placeholder={t("editProfilePopup.placeholderName")}
            />
            <p className="form__input-error name-input-error">{errors.userName?.message}</p>

            <input type="text" className="form__input" id="description"
                   {...register("description", {required: true})}
                   placeholder={t("editProfilePopup.placeholderLink")}
            />
            <p className="form__input-error job-input-error">{errors.description?.message}</p>

        </PopupWithForm>
    )
}

export default EditProfilePopup