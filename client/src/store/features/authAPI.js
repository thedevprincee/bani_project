import axios from 'axios'

const globalAxios = axios.create({
    baseURL: "http://localhost:2345/api/",
})

globalAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

const apiService = (url, method, data)=> {
    return new Promise((resolve, reject)=>{
        globalAxios({
            method,
            url,
            headers: {
                // "Content-Length": "application/json",
                Accept: "application/json"
            }, 
            data,
        })
        .then((response)=> {
            resolve(response)
        })
        .catch((error)=>{
            reject(new Error(error.response.data.message))
        })
    })
};
export const login = (data) =>{
    return apiService('/auth/login', "POST", data)
}
export const signup = (data) =>{
    return apiService('/auth/signup', "POST", data)
}
const authAPIs = {
    login,
    signup
}
export default authAPIs