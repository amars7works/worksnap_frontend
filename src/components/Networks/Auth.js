import axios from 'axios';
import { createLocalAuthState, getLocalAuthState } from '../LocalStorage';

export const IsUserLoggedIn = () => {
    // checks whether the user is loggedIn or not
    return getLocalAuthState()
}

export const SecureLoginUser = async (username, password) => {
    // Logs user in
    const config = {
        method: 'POST',
        url: '/api/user/login/',
        withCredentials: true,
        data: {
            username: username,
            password: password 
        }
    }
    return await axios(config).then((res) => {
        // Save data to localstorage.
        createLocalAuthState(res.data)
    }).catch((err) => {
        console.log('[Error] unsuccessful login attempt')
    })
}

export const SecureLogoutUser = async () => {

}


