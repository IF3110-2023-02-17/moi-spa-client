import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../../lib/api";
import { Movie } from "../../types/movie";
import Button from "../utils/Button";

function MovieCard({ movie, isAdding }: { movie: Movie; isAdding?: boolean }) {
  const queryClient = useQueryClient();
  const addMutation = useMutation({
    mutationFn: () => apiClient.post(`/movies/${movie.movie_id}`),
    onSuccess(res) {
      if (res.data?.success) {
        queryClient.invalidateQueries({ queryKey: ["movies"] });
        alert("Movie added");
      } else {
        alert("Failed to add movie");
      }
    },
    onError() {
      alert("Failed to add movie");
    },
  });
  return (
    <li className="flex flex-col">
      <div className="flex">
        <img
          className="aspect-[2/3] object-cover w-full"
          src={movie.img_path}
          alt={movie.title}
        />
      </div>
      <div className="w-full flex-1 flex flex-col">
        <h4 className="px-2 font-bold text-base text-center">{movie.title}</h4>
        {isAdding && (
          <div className="flex-1 flex items-end mt-2 mb-4">
            <Button onClick={addMutation.mutate}>Add</Button>
          </div>
        )}
      </div>
    </li>
  );
}

export default MovieCard;
