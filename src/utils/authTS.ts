export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (email: string, password: string) => {

    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: password,
            email: email
        })
    })
        .then((response) => handleResponse(response)).then(data => data);
};
export const authorize = (email: string, password: string) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: password,
            email: email
        })
    })
        .then((response) => handleResponse(response))
        .then((data) => {
            if (data.token) {
                localStorage.setItem('jwt', data.token);

                return data;
            }
        })
};
export const checkToken = (token: string | null) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then((response) => handleResponse(response)).then(data => data);
}

function handleResponse(res: Response) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};
