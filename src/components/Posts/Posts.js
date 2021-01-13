import React, { useEffect } from "react";
import Post from "./Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/Post/postActions";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log(posts);

  return (
    <div className="posts-container">
      <div className="posts">
        {!posts.length ? (
          <p>Loading...</p>
        ) : (
          posts.map((post) => (
            <div key={post._id}>
              <Post post={post} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Posts;
