import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import MovieCard from "../../components/Movie/MovieCard";
import Button from "../../components/utils/Button";
import { apiClient } from "../../lib/api";
import { Movie } from "../../types/movie";

function MovieAdd() {
  const { data: movies } = useQuery({
    queryKey: ["movies", "not"],
    queryFn: () =>
      apiClient
        .get<{ movies: Movie[] }>("/movies/available")
        .then((res) => res.data.movies),
  });
  const navigate = useNavigate();
  return (
    <div className="mt-12 max-w-screen-xl mx-auto px-4">
      <div className="flex justify-between mb-8">
        <h1 className="font-bold text-4xl">List of Available Movies</h1>
        <div className="">
          <Button type="button" onClick={() => navigate(-1)}>
            Kembali
          </Button>
        </div>
      </div>
      <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {movies?.map((movie) => (
          <MovieCard movie={movie} key={movie.movie_id} isAdding />
        ))}
      </ul>
    </div>
  );
}

export default MovieAdd;
