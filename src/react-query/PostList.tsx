import { useState } from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const { data: posts, error, isLoading } = usePosts(userId);

  if (isLoading)
    return <div className="spinner-border text-success" role="status"></div>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        className="form-select mb-3"
        onChange={(ev) => {
          console.log(ev.target.value);
          setUserId(parseInt(ev.target.value));
        }}
        value={userId}
      >
        <option selected value={undefined}>
          Posts of All Users
        </option>
        <option value="1">User1</option>
        <option value="2">User2</option>
        <option value="3">User3</option>
      </select>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
