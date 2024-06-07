import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import { Screenshot } from "../entities/Screenshot";

function useScreenshots(gameId: number) {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
}

export default useScreenshots;