import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

export interface Platform{
    id: number;
    name: string;
    slug: string;
}
const usePlatforms = () => useQuery({
    queryKey: ['platforms'], 
    queryFn: () => apiClient.getAll,
    initialData: {count: platforms.length, results: platforms},
    staleTime: 24 * 60 * 60 * 1000,
});
export default usePlatforms;