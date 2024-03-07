import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
    
  
  }
 const axiosInstance = axios.create({
    baseURL:'https://api.rawg.io/api',
    params:  {
        key: 'e1c4ce038d7a48ddba523166dcacd436'
    }
})
class APIClient<T> {
    endpoint: string;
    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll(config: AxiosRequestConfig){
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
    }
}

export default APIClient;