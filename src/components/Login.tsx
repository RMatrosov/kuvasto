import {FC, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import {useSelector} from "react-redux";
import {selectLang} from "../redux/selectors/selectorLang";
import {language} from "../languages/language";
import * as yup from "yup";


type TLogin = {
    handleAuthorize(
        email: string,
        password: string
    ): void
}

interface IFormInputs {
    Email: string | number
    password: string | number
}

const Login: FC<TLogin> = ({handleAuthorize}) => {

    const {selectedLang} = useSelector(selectLang)

    const schema = yup.object().shape({
        Email: yup.string()
            .email(`${selectedLang === 'ru' ? 'адрес электронной почты должен содержать символ @' : ''}
            ${selectedLang === 'fi' ? 'Syötä kelvollinen sähköpostiosoite. Esim. erkki@tunnus.fi' : ''}`)
            .required(`${selectedLang === 'ru' ? 'Введите адрес электронной почты' : ''}
            ${selectedLang === 'fi' ? 'Pakollinen kenttä' : ''}`),
        password: yup.string()
            .min(8,`${selectedLang === 'ru' ? 'пароль должен содержать от 8 до 32 символов' : ''}
            ${selectedLang === 'fi' ? 'vähentään 8 merkkiä' : ''}`)
            .max(32,`${selectedLang === 'ru' ? 'пароль должен содержать от 8 до 32 символов' : ''}
            ${selectedLang === 'fi' ? 'enintään 32 merkkiä' : ''}`)
            .required(`${selectedLang === 'ru' ? 'Введите адрес электронной почты' : ''}
            ${selectedLang === 'fi' ? 'Pakollinen kenttä' : ''}`)
    });

    const {register, formState: {errors}, handleSubmit} = useForm<IFormInputs>({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function onSubmit() {
        handleAuthorize(email, password)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='log__in_wrapper' noValidate>
            <h4 className='log__in_title'>{language[selectedLang].login.title}</h4>
            <input type="email" className="log__in_input"
                   placeholder='Email'
                   {...register("Email", {required: true})}
                   onChange={(e) => setEmail(e.target.value)}
                   value={email || ''}
            />
            <p className='log__in_error'>{errors.Email?.message}</p>
            <input type="password" className="log__in_input"
                   placeholder={language[selectedLang].login.placeholder}
                   value={password || ''}
                   {...register("password", {required: true})}
                   onChange={(e) => setPassword(e.target.value)}
            />
            <p className='log__in_error'>{errors.password?.message}</p>
            <button type='submit' className='log__in_button'>{language[selectedLang].login.buttonText}</button>
        </form>
    )
}

export default Login