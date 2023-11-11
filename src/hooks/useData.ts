import {useState, useEffect} from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface FetchResponse<T>{
    count: number;
    results: T[]
}


const useData = <T>(endpoint: string) => {
    
        const [data, setData] = useState<T[]>([]);
        const [error, setError] = useState("");
        const [isLoading, setLoading ] = useState(true);

          useEffect(() => {
            const abortController = new AbortController();
            apiClient
              .get<FetchResponse<T>>(endpoint, {signal: abortController.signal})
              .then((res) => {setData(res.data.results); 
              setLoading(false);})
              .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)});
                setLoading(false);
              return () => abortController.abort();
        
          }, [endpoint]);
          return {data, error, isLoading}
}
export default useData;