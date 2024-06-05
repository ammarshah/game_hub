import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchApiResponse } from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

function usePlatforms() {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchApiResponse<Platform>>("/platforms/lists/parents")
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platforms.length, results: platforms },
  });
}

export default usePlatforms;
