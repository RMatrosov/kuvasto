export interface ILanguage {
    [ru: string]: {
        "header": {
            [key: string]: string
        }
        "addPlacePopup": {
            [key: string]: string
        }
        "editAvatarPopup": {
            [key: string]: string
        }
        'editProfilePopup': {
            [key: string]: string
        }
        'login': {
            [key: string]: string
        }
        'register': {
            [key: string]: string
        }

    },

    fi: {
        "header": {
            [key: string]: string
        }
        "addPlacePopup": {
            [key: string]: string
        }
        "editAvatarPopup": {
            [key: string]: string
        }
        'editProfilePopup': {
            [key: string]: string
        }
        'login': {
            [key: string]: string
        }
        'register': {
            [key: string]: string
        }

    }
}

export const language: ILanguage = {
    ru: {
        "header": {
            "singOut": "Выйти",
            "singIn": "Войти",
            "singUp": "Регистрация"
        },
        "addPlacePopup": {
            'title': 'Новое место',
            'buttonText': 'Создать',
            'buttonLoadingText': 'Создать...',
            'placeholderName': 'Название',
            'placeholderLink': 'Ссылка на картинку',
        },
        "editAvatarPopup": {
            'title': 'Обновить аватар',
            'buttonText': 'Сохранить',
            'buttonLoadingText': 'Сохранить...',
            'placeholderLink': 'Ссылка на картинку',
        },
        'editProfilePopup': {
            'title': 'Редактировать профиль',
            'buttonText': 'Сохранить',
            'buttonLoadingText': 'Сохранить...',
            'placeholderName': 'Введите имя',
            'placeholderLink': 'Введите род занятия',
        },
        'login': {
            'title': 'Вход',
            'buttonText': 'Войти',
            'placeholder': 'Пароль',
        },
        'register': {
            'title': 'Регистрация',
            'buttonText': 'Зарегистрироваться',
            'placeholder': 'Пароль',
            'text': 'Уже зарегистрированы?',
            'textBtn': 'Войти'
        }
    },
    fi: {
        "header": {
            "singOut": "Kirjaudu ulos",
            "singIn": "Luo tunnus",
            "singUp": "Kirjaudu sisään"
        },
        "addPlacePopup": {
            'title': 'Uusi paikka',
            'buttonText': 'Luoda',
            'buttonLoadingText': 'Luoda...',
            'placeholderName': 'Nimi',
            'placeholderLink': 'Linkki',
        },
        "editAvatarPopup": {
            'title': 'Päivitä avatar',
            'buttonText': 'Luoda',
            'buttonLoadingText': 'Luoda...',
            'placeholderLink': 'Linkki',
        },
        'editProfilePopup': {
            'title': 'Muokata profiili',
            'buttonText': 'Luoda',
            'buttonLoadingText': 'Luoda...',
            'placeholderName': 'Kirjoita nimisi',
            'placeholderLink': 'Kirjoita ammattisi',
        },
        'login': {
            'title': 'Luo tunnus',
            'buttonText': 'Luo',
            'placeholder': 'Salasana',
        },
        'register': {
            'title': 'Kirjaudu sisään',
            'buttonText': 'Kirjaudu',
            'placeholder': 'Salasana',
            'text': 'Oletko jo kirjautunut?',
            'textBtn': 'Luo tunnus'
        }
    }
}