export const createLocalAuthState = (data) => {
    // Creates json string named as auth state in localStorage
    try {

        const stringifiedData = JSON.stringify(data)
        localStorage.setItem('s7_auth_state', stringifiedData)

    } catch(err) {

        console.log('[Error] saving data in localstorage', err)

    }
}

export const getLocalAuthState = () => {
    // Tries to get the auth state from localStorage
    const defaultAuth = {
        user_status: false,
        is_superuser: false
    }
    try {

        const stringifiedData = localStorage.getItem('s7_auth_state')
        return(stringifiedData === null ? defaultAuth : JSON.parse(stringifiedData))

    } catch(err) {

        return defaultAuth

    }
}

export const destroyLocalAuthState = () => {
    // Destroys auth state in localStorage
    try {

        localStorage.removeItem('s7_auth_state')

    } catch(err) {

        console.log('[Error] destroying data in localStorage', err)

    }
}