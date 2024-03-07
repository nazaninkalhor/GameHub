import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";

interface Platform{
    id: number;
    name: string;
    slug: string;
}
const usePlatforms = () => useQuery({
    queryKey: ['platforms'], 
    queryFn: () => apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(res => res.data),
    initialData: {count: platforms.length, results: platforms},
    staleTime: 24 * 60 * 60 * 1000,
});
export default usePlatforms;