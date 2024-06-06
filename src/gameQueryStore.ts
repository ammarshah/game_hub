import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchQuery?: string;
}

interface Actions {
  setGenreId: (genreId: GameQuery["genreId"]) => void;
  setPlatformId: (platformId: GameQuery["platformId"]) => void;
  setSortOrder: (sortOrder: GameQuery["sortOrder"]) => void;
  setSearchQuery: (searchQuery: GameQuery["searchQuery"]) => void;
}

const initialState: GameQuery = {
  genreId: undefined,
  platformId: undefined,
  sortOrder: undefined,
  searchQuery: undefined,
};

const useGameQueryStore = create<GameQuery & Actions>((set) => ({
  ...initialState,
  setGenreId: (genreId) => set({ genreId }),
  setPlatformId: (platformId) => set({ platformId }),
  setSortOrder: (sortOrder) => set({ sortOrder }),
  setSearchQuery: (searchQuery) => set({ ...initialState, searchQuery }),
}));

export default useGameQueryStore;
