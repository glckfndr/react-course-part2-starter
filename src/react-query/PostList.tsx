import { useState } from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
  const pageSize: number = 10;
  const [page, setPage] = useState<number>(1);
  const { data: posts, error, isLoading } = usePosts({ page, pageSize });

  if (isLoading)
    return <div className="spinner-border text-success" role="status"></div>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        className="btn btn-primary my-2"
        onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : 1))}
      >
        Previous
      </button>
      <button
        className="btn btn-primary ms-1"
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </button>
    </>
  );
};

export default PostList;
