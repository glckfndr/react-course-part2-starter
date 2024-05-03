import { useState } from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
  const pageSize: number = 10;
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetching,
  } = usePosts({ pageSize });

  if (isLoading)
    return <div className="spinner-border text-success" role="status"></div>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts.pages?.map((page) => (
          <>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </>
        ))}
      </ul>

      <button
        disabled={isFetching}
        className="btn btn-primary my-3 ms-1"
        onClick={() => fetchNextPage()}
      >
        {isFetching ? "Loading ..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
