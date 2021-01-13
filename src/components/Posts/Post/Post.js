import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="creator">
        <img
          src="https://khoahocphattrien.vn/Images/Uploaded/Share/2016/12/20/Nhung-buc-anh-dep-nhat-2016-chia-se-tren-Flickr_4.jpg"
          alt=""
        />
        <p>Creator</p>
      </div>
      <div className="post-details">
        <img src={props.post.image} alt={props.post.title} />
        <div className="content">
          <p>
            <span>
              <strong>Creator </strong>
            </span>
            <span>{props.post.title}</span>
          </p>
          <p id="tags">{props.post.tags.map((tag) => `#${tag} `)}</p>
          <p>{props.post.content}</p>
        </div>
      </div>
      <div className="comment">
        <input type="text" placeholder="Add a comment" />
        <button disabled>Post</button>
      </div>
    </div>
  );
};

export default Post;
