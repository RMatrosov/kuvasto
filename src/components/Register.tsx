import {FC, useState} from "react";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useTranslation} from "react-i18next";


type TRegister = {
    handleRegister(
        email: string,
        password: string
    ): void
}

interface IFormInputs {
    Email: string | number
    password: string | number
}

const Register: FC<TRegister> = ({handleRegister}) => {

    const {t} = useTranslation();

    const schema = yup.object().shape({
        Email: yup.string()
            .email(t("addPlaceSchema.email"))
            .required(t("addPlaceSchema.emailReq")),
        password: yup.string()
            .min(8, t("addPlaceSchema.min832"))
            .max(32, t("addPlaceSchema.min832"))
            .required(t("addPlaceSchema.description"))
    });

    const {register, formState: {errors}, handleSubmit} = useForm<IFormInputs>({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function onSubmit() {
        handleRegister(email, password)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='log__in_wrapper' noValidate>
            <h4 className='log__in_title'>{t("register.title")}</h4>
            <input type="email" className="log__in_input"
                   placeholder='Email'
                   value={email || ''}
                   {...register("Email", {required: true})}
                   onChange={(e) => setEmail(e.target.value)}
            />
            <p className='log__in_error'>{errors.Email?.message}</p>
            <input type="password" className="log__in_input" placeholder={t("register.placeholder")}
                   value={password || ''}
                   {...register("password", {required: true})}
                   onChange={(e) => setPassword(e.target.value)}
            />
            <p className='log__in_error'>{errors.password?.message}</p>
            <button type='submit' className='log__in_button'>{t("register.buttonText")}</button>
            <p className='login__form_button-text'>{t("register.text")}
                <Link to='/sign-in'>
                    <button className='login__form_button'> {t("register.textBtn")}</button>
                </Link>
            </p>
        </form>
    )
}

export default Register