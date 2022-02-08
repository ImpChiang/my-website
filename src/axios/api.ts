import { Request } from './index';

class Api {
    public static common = {
        login: (params: any) => Request.post('/api/user/login', params)
    }
    public static article = {
        list: (params?: any) => Request.get('/api/article/list', params),
        detail: (params: any) => Request.get('/api/article/query', params),
        save: (params: any) => Request.post('/api/article/save', params)
    }
    public static files = {
        upload: (params?: any) => Request.post('/api/file/upload',params)
    }
}

export {
    Api
}
