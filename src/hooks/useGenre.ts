import useGenres from "./useGenres";

function useGenre(id?: number) {
  const { data: genres } = useGenres();
  return genres?.results.find((genre) => genre.id === id);
}

export default useGenre;
