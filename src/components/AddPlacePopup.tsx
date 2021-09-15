import PopupWithForm from "./PopupWithForm";
import React, {FC, useEffect} from "react";
import {useSelector} from "react-redux";
import {selectCardSettings} from "../redux/selectors/selectCardSettings";
import {selectPopups} from "../redux/selectors/selectPopups";
import {IPlace} from "../types/IPlace";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {selectLang} from "../redux/selectors/selectorLang";
import {language} from "../languages/language";


type TAddPlacePopup = {
    onClose: () => void
    onAddPlace: (arg: IPlace) => void
}

interface IFormInputs {
    title: string | number
    link: string | number | symbol
}

const AddPlacePopup: FC<TAddPlacePopup> = (props) => {
    const {selectedLang} = useSelector(selectLang)

  const addPlaceSchema = yup.object().shape({
        title: yup.string()
            .min(2, `${selectedLang === 'ru' ? 'минимум 2 символа' : ''}
            ${selectedLang === 'fi' ? 'vähentään 2 merkkiä' : ''}`)
            .required(`${selectedLang === 'ru' ? 'минимум 2 символа' : ''}
            ${selectedLang === 'fi' ? 'Pakollinen kenttä' : ''}`),
        link: yup.string()
            .url(`${selectedLang === 'ru' ? 'введите корректный URL' : ''}
            ${selectedLang === 'fi' ? 'Syötä kelvollinen URL' : ''}`)
            .required(`${selectedLang === 'ru' ? 'введите URL' : ''}
            ${selectedLang === 'fi' ? 'Pakollinen kenttä' : ''}`),
    });

    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm<IFormInputs>({
        resolver: yupResolver(addPlaceSchema),
        mode: "onChange",
    });

    const {loadingBtn} = useSelector(selectCardSettings)

    const {isAddPlacePopupOpen} = useSelector(selectPopups)

    useEffect(() => {
        reset()

    }, [reset, isAddPlacePopupOpen]);

    const onSubmit = handleSubmit(data => {
        props.onAddPlace({
            title: data.title,
            link: data.link,
        });
    });

    return (
        <PopupWithForm isOpen={isAddPlacePopupOpen}
                       params={{
                           name: 'new-card',
                           title: `${language[selectedLang].addPlacePopup.title}`,
                           buttonText: `${language[selectedLang].addPlacePopup.buttonText}`,
                           buttonLoadingText: `${language[selectedLang].addPlacePopup.buttonLoadingText}`,
                           formName: "new-card"
                       }}

                       onClose={props.onClose}
                       onSubmit={onSubmit}
                       isValid={isValid}
                       loadingBtn={loadingBtn}
                       >


            <input type="text"
                   {...register("title", {required: true})}
                   className="form__input" id="title"
                   placeholder={language[selectedLang].addPlacePopup.placeholderName}/>
            <p className='title-input-error form__input-error'>{errors.title?.message}</p>

            <input type="url" className="form__input"
                   {...register("link", {required: true})}
                   name="link" id="link"
                   placeholder={language[selectedLang].addPlacePopup.placeholderLink}/>
            <p className='link-input-error form__input-error'>{errors.link?.message}</p>



        </PopupWithForm>
    )
}

export default AddPlacePopup