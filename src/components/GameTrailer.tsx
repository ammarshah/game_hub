import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

function GameTrailer({ gameId }: Props) {
  const { data, error, isLoading } = useTrailers(gameId);
  const firstTrailer = data?.results[0];

  if (isLoading) return null;

  if (error) throw error;

  return firstTrailer ? (
    <video
      src={firstTrailer.data[480]}
      poster={firstTrailer.preview}
      controls
    />
  ) : null;
}

export default GameTrailer;
