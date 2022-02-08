import Cookies from 'js-cookie';
const tokenKey: string = 'Authorization'

const GetToken = () => {
    return Cookies.get(tokenKey)
}

const SetToken = (token: string) => {
    Cookies.set(tokenKey, token)
}

const RemoveToken = () => {
    Cookies.remove(tokenKey)
}

export {
    GetToken,
    SetToken,
    RemoveToken
}
