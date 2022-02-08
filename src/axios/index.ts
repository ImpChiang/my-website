import axios, { AxiosRequestConfig, Method } from "axios";
import {message} from "ant-design-vue";
import qs from 'qs';

const { DEV, VITE_DEV_API, VITE_PRD_API } = import.meta.env

const instance = axios.create({
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    timeout: 1000*30,
    baseURL: DEV ? VITE_DEV_API: VITE_PRD_API
})
type ConfigHeader = {

}
//请求拦截
instance.interceptors.request.use(
    config => {
        console.log('request',config)
        const url = config.url
        if ((url as string).indexOf('file') > -1) {
            config.headers = {
                'Content-Type':'multipart/form-data'
            }

        } else {
            config.data = qs.stringify(config.data)
        }
        return config
    },
    error => {
        message.error(error.data.error.message);
        return Promise.reject(error.data.error.message);
    }
)
// 响应拦截
instance.interceptors.response.use((config) => {
    console.log('response',config)
    if (config.status == 201 || config.status == 200) {
        return Promise.resolve(config.data)
    } else {
        return Promise.reject(config)
    }
}, (error) => {
    console.log(error)
})

// export default instance

export class Request {
    static get = (url: string,params?: any) => {
        return new Promise((resolve,reject) => {
            instance.get(url,{ params: params }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
    static post = (url: string, params?: any) => {
       return new Promise((resolve,reject) => {
           instance.post(url,params).then(res => {
               resolve(res)
           }).catch(err => {
               reject(err)
           })
       })
    }
}
