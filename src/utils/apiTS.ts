import {IProfile} from "../types/currentUserAndEmailTypes";
import {IPlace} from "../types/IPlace";
import {IAvatar} from "../types/IAvatar";

interface IApiTS{
    baseUrl: string
    headers: {
        authorization: string
        'Content-Type': string
    }
}


class ApiTS {

    URL: string
    token: string

    constructor({baseUrl, headers}: IApiTS) {
        this.URL = baseUrl;
        this.token = headers.authorization;
    };

    getInitialCards() {
        return fetch(`${this.URL}cards`, {
            headers: {
                authorization: this.token,
            }
        })
            .then(this._handleResponse);
    };

    getUserInfoFromServer() {
        return fetch(`${this.URL}users/me`, {
            headers: {
                authorization: this.token,
            }
        })
            .then(this._handleResponse);
    };

    setUserInfoFromServer({userName, description}: IProfile) {
        return fetch(`${this.URL}users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: userName,
                about: description
            })
        })
            .then(this._handleResponse);
    };

    addCardToServer({title, link}: IPlace) {
        return fetch(`${this.URL}cards`, {
            method: 'POST',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: title,
                link: link
            })
        })
            .then(this._handleResponse);
    };

    deleteCardFromServer(data: string) {
        return fetch(`${this.URL}cards/${data}`, {
            method: 'DELETE',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json'
            }
        })
            .then(this._handleResponse);
    };

    changeLikeCardStatus(id: string, isLiked: boolean) {
        let method
        if (!isLiked) {
            method = 'DELETE'
        } else {
            method = 'PUT'
        }
        return fetch(`${this.URL}cards/likes/${id}`, {
            method: method,
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json'
            }
        })
            .then(this._handleResponse);
    };

    changeAvatar(item: IAvatar) {
        return fetch(`${this.URL}users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: item.avatar,
            })
        })
            .then(this._handleResponse);
    };

    _handleResponse(res: Response) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    };

};

const apiTS = new ApiTS({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-26/',
    headers: {
        authorization: '4e299d77-1777-4738-8eea-94761855c603',
        'Content-Type': 'application/json'
    }
});

export default apiTS;

