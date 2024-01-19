export const doLogout = (next) => {
    localStorage.removeItem('token')
    next()
}

export const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    if (token != null) return true;
    else return false
}

export const logIn = (token) => {
    localStorage.setItem('token', token);
}