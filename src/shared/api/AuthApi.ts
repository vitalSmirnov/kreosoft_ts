import axios from "axios";

export interface ILogin {
    email: string,
    password: string,
    remember: boolean
}

const instance = axios.create({
    baseURL: "http://localhost:5182/api/",
});


instance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
});

function loginUser(data : ILogin){
    return instance.post('/auth/login', data)
        .then(response => {
            if (response.status === 200){
                return {
                    status: response.status,
                    data: response.data
                };
            }
        })
        .catch(error => {
            return {
                status: error.response.status,
                error: error.response.statusText
            };
        })
}
function registerUser(data : any){
    return instance.post('/login', data)
        .then(response => {
            if (response.status === 200){
                return {
                    status: response.status,
                    data: response.data
                };
            }
        })
        .catch(error => {
            return {
                status: error.status,
                message: error.response
            };
        })
}
function logoutUser(data : any){
    return instance.post('/login', data)
        .then(response => {
            if (response.status === 200){
                return {
                    status: response.status,
                    data: response.data
                };
            }
        })
        .catch(error => {
            return {
                status: error.status,
                message: error.response
            };
        })
}

export const authApi = {
    logIn: loginUser,
    signIn: registerUser,
    logout: logoutUser,
}