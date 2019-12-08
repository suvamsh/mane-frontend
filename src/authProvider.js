export default {
    // user log in
    login: ({ username }) => {
        localStorage.setItem('username', username);
        // accept all username/password combinations
        return Promise.resolve();
    },
    //logout button
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    //error
    checkError: ({ status }) => {
        if(status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    //user navigates to new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    //user navigates to new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(), 
}