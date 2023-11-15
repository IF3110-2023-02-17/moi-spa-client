import { getApiImagePath } from "../../lib/api";
import { Post } from "../../types/post";

function PostCard({ post }: { post: Post }) {
  return (
    <li className="bg-white shadow-lg">
      <img
        className="aspect-video w-full object-contain"
        src={getApiImagePath(post.img_path)}
        alt={post.title}
      />
      <div className="p-6">
        <h3 className="font-bold text-2xl">{post.title}</h3>
        <p className="line-clamp-5 text-base mt-2 text-black">{post.body}</p>
        <p className="text-[#949494] text-base mt-5">
          {new Date(post.created_at).toLocaleDateString("id", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </li>
  );
}

export default PostCard;
