import axios from 'axios'
const globalAxios = axios.create({
    baseURL: "http://localhost:2345/api/branch"
})
globalAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token")
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})
const apiService = (url, method, data)=>{
    return new Promise((resolve, reject)=>{
        globalAxios({
            method,
            url,
            headers: {
                Accept: "application/json"
            }
        })
        .then((response)=>{
            resolve(response)
        })
        .catch((error)=>{
            reject(new Error(error.response.data.message))
        })
    })
}

export const postBranch = (data)=>{
    return apiService('/addbranch', "POST", data)
}
export const getBranch = (data)=>{
    return apiService('/', "GET", data)
}