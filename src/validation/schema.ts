import * as yup from "yup";




export const schema = yup.object().shape({
    Email: yup.string()
        .email()
        .required(),
    password: yup.string()
        .min(8,)
        .max(32,)
        .required()

});

export const addPlaceSchema = yup.object().shape({
    title: yup.string()
        .min(2,)
        .required(),
    link: yup.string()
        .url()
        .required(),
});

export const editProfilePopupSchema = yup.object().shape({
    userName: yup.string()
        .min(2,)
        .required(),
    description: yup.string()
        .min(2,)
        .required(),
});

export const avatarPopupSchema = yup.object().shape({
    avatar: yup.string()
        .url()
        .required(),
});

/*

export const schema = yup.object().shape({
    Email: yup.string()
        .email('адрес электронной почты должен содержать символ @')
        .required("введите адрес электронной почты"),
    password: yup.string()
        .min(8, 'пароль должен содержать от 8 до 32 символов')
        .max(32, 'пароль должен содержать от 8 до 32 символов')
        .required()

});

export const addPlaceSchema = yup.object().shape({
    title: yup.string()
        .min(2, 'минимум 2 символа')
        .required("введите название минимум 2 символа"),
    link: yup.string()
        .url('введите корректный URL')
        .required('введите URL'),
});

export const editProfilePopupSchema = yup.object().shape({
    userName: yup.string()
        .min(2, 'минимум 2 символа')
        .required("введите название минимум 2 символа"),
    description: yup.string()
        .min(2, 'минимум 2 символа')
        .required("введите название минимум 2 символа"),
});

export const avatarPopupSchema = yup.object().shape({
    avatar: yup.string()
        .url('введите корректный URL')
        .required('введите URL'),
});*/
