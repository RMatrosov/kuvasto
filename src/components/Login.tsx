import {FC, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from "../validation/schema";
import {useSelector} from "react-redux";
import {selectLang} from "../redux/selectors/selectorLang";
import {language} from "../languages/language";




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

    const {register, formState: {errors}, handleSubmit} = useForm<IFormInputs>({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    const {selectedLang} = useSelector(selectLang)

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function onSubmit() {
        handleAuthorize(email, password)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='log__in_wrapper'>
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