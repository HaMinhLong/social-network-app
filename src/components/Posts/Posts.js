import React, { useEffect, useState } from "react";
import Post from "./Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, updatePosts } from "../../redux/Post/postActions";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import FileBase from "react-file-base64";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const [post, setPost] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const [updatePost, setUpdatePost] = useState({
    title: "",
    description: "",
    starting: "",
    moreDes: "",
    watchOffline: "",
    movieIs: "",
    audio: "",
    subtitles: "",
    selectedFile: "",
  });

  const openModal = (post) => {
    setPost(post);
    setUpdatePost({
      ...updatePost,
      tags: post.tags,
      title: post.title,
      content: post.content,
      image: post.image,
    });
  };

  const closeModal = () => {
    setPost(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePosts(post._id, updatePost));
    console.log(updatePost);

    window.location = "/";
  };

  return (
    <div className="posts-container">
      <Fade bottom cascade>
        <div className="posts">
          {!posts.length ? (
            <p>Loading...</p>
          ) : (
            posts.map((post) => (
              <div key={post._id}>
                <Post post={post} openModal={openModal} />
              </div>
            ))
          )}
        </div>
      </Fade>
      {post && (
        <Modal isOpen={true} onRequestClose={closeModal} ariaHideApp={false}>
          <Zoom>
            <button className="close-modal" onClick={closeModal}>
              X
            </button>
            <div id="post-details">
              <h2>Update {post.title}</h2>
              <img src={updatePost.image} alt={updatePost.title} />
              <form onSubmit={handleSubmit}>
                <label htmlFor="title">Tittle: </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={updatePost.title}
                  onChange={(e) =>
                    setUpdatePost({ ...updatePost, title: e.target.value })
                  }
                  required
                  autoFocus
                />
                <label htmlFor="content">Content: </label>
                <input
                  type="text"
                  name="content"
                  id="content"
                  value={updatePost.content}
                  onChange={(e) =>
                    setUpdatePost({
                      ...updatePost,
                      content: e.target.value,
                    })
                  }
                  required
                />
                <label htmlFor="tags">Tags: </label>
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  value={updatePost.tags}
                  onChange={(e) =>
                    setUpdatePost({
                      ...updatePost,
                      tags: e.target.value.split(","),
                    })
                  }
                  required
                />
                <div>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setUpdatePost({ ...updatePost, image: base64 })
                    }
                  />
                </div>

                <input type="submit" value="Update Post" />
              </form>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
};

export default Posts;
