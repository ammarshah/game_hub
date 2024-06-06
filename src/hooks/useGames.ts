import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { Platform } from "./usePlatforms";
import APIClient from "../services/api-client";
import useGameQueryStore from "../gameQueryStore";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

function useGames() {
  const { genreId, platformId, sortOrder, searchQuery } = useGameQueryStore();

  return useInfiniteQuery({
    queryKey: ["games", { genreId, platformId, sortOrder, searchQuery }],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          page: pageParam,
          genres: genreId,
          parent_platforms: platformId,
          ordering: sortOrder,
          search: searchQuery,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
}

export default useGames;
