import { useQuery } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { Navigate, useParams } from "react-router-dom";
import { apiClient, getApiImagePath } from "../../lib/api";
import { Post } from "../../types/post";

function PostPage() {
  const params = useParams();
  const postId = Number(params.postId as string);
  const { data, error } = useQuery({
    queryKey: ["post", postId],
    queryFn: () =>
      apiClient
        .get<{ post: Post }>("/posts/" + postId)
        .then((res) => res.data.post),
  });
  if (isNaN(postId)) {
    <Navigate to={"/not-found"} />;
  }
  if (error && isAxiosError(error) && error.response?.status === 404) {
    return <Navigate to={"/not-found"} />;
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      <div className="relative">
        <img
          className="aspect-[16/3] w-full object-cover"
          src={getApiImagePath(data.img_path)}
          alt={data.title}
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end items-center">
          <div className="w-full max-w-screen-lg px-4 py-8">
            <h1 className="text-white font-bold text-4xl md:text-6xl">
              {data.title}
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-lg mx-auto px-4">
        <p className="text-[#949494] text-base mt-5">
          {new Date(data.created_at).toLocaleDateString("id", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        {data.body.split("\n").map((paragraph, index) => (
          <p key={index} className="my-8 text-justify text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default PostPage;
