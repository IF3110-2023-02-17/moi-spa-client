import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import PostCard from "../../components/Post/PostCard";
import Button from "../../components/utils/Button";
import { apiClient } from "../../lib/api";
import { Post } from "../../types/post";

function PostHome() {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      apiClient.get<{ posts: Post[] }>("/posts").then((res) => res.data.posts),
  });
  return (
    <div className="mt-12 max-w-screen-lg mx-auto px-4">
      <div className="flex justify-between mb-8">
        <h1 className="font-bold text-4xl">Your Content</h1>
        <div className="">
          <Button type="button" asChild>
            <Link to={"/posts/new"}>Tambah Konten</Link>
          </Button>
        </div>
      </div>
      <ul className="grid grid-cols-3 gap-4 md:gap-10">
        {data?.map((post) => <PostCard post={post} key={post.post_id} />)}
      </ul>
    </div>
  );
}

export default PostHome;
