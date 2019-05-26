import axios from 'axios';
import { createLocalAuthState, destroyLocalAuthState } from '../LocalStorage';

export const IsUserLoggedIn = () => {
    // checks whether the user is loggedIn or not
    const config = {
        method: 'GET',
        url: '/api/user/auth_status/',
        withCredentials: true
    }

    axios(config).then((response) => {
        if(response.data.user_status) {
            createLocalAuthState(response.data)
        } else {
            destroyLocalAuthState()
        }
    }).catch((err) => {
        destroyLocalAuthState()
        console.log("[Notice] you've been logged out")
    })
}

export const AuthRedirectHandler = (data, props) => {

    // helps in authentication redirection after logging in
    if(data.user_status && !data.is_superuser) {
        props.history.push(props.employeeInitialRoute)
    } else if(data.user_status && data.is_superuser) {
        props.history.push(props.employerInitialRoute)
    }
}

export const SecureLoginUser = (username, password, props=undefined) => {
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
    axios(config).then((res) => {
        // Save data to localstorage.
        createLocalAuthState(res.data)
        AuthRedirectHandler(res.data, props)
    }).catch((err) => {
        console.log('[Error] unsuccessful login attempt', err)
    })
}

export const SecureLogoutUser = () => {
    // Logout for user
    const config = {
        method: 'GET',
        url: '/api/user/logout/',
        withCredentials: true
    }
    axios(config).then((response) => {
        destroyLocalAuthState()
        window.location.pathname = '/'
    }).catch(err => {
        destroyLocalAuthState()
        window.location.pathname = '/'
        console.log('[Error] Logging out user')
    })
}

