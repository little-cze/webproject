import axios from 'axios'

export function request(config){
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8080',
        timeout:5000
    })
    // 2.axios的拦截器
    instance.interceptors.request.use(config=>{
        console.log(config)
        return config
    },error => {
        console.log(error)
    })
    instance.interceptors.response.use(res=>{
        console.log(res)
        return res.data
    },error => {
        console.log(error)
    })

    //发送网络请求
    return instance(config)

}

