import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../../redux/Post/postActions";

const AddNewPost = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    tags: "",
    image: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(post));
    clear();

    window.location = "/";
  };

  const clear = () => {
    setPost({
      title: "",
      content: "",
      tags: "",
      image: "",
    });
  };

  return (
    <div className="add-new-post">
      <div className="add-post">
        <div className="title">
          <h2>Create New Post</h2>
        </div>
        <div className="creator">
          <img
            src="https://khoahocphattrien.vn/Images/Uploaded/Share/2016/12/20/Nhung-buc-anh-dep-nhat-2016-chia-se-tren-Flickr_4.jpg"
            alt=""
          />
          <p>Creator</p>
        </div>
        <form onSubmit={handleSubmit} className="form-add">
          <input
            required
            type="text"
            placeholder="Tags"
            value={post.tags}
            onChange={(e) =>
              setPost({ ...post, tags: e.target.value.split(",") })
            }
          />
          <input
            type="text"
            placeholder="What's on your mind?"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            required
          />
          <input
            required
            type="text"
            placeholder="Content"
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
          />
          <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setPost({ ...post, image: base64 })}
            />
          </div>
          <button>Post</button>
          <button onClick={clear}>Clear</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewPost;
