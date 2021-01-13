import React, { useState } from "react";
import moment from "moment";
import { deletePost } from "../../../redux/Post/postActions";
import { useDispatch } from "react-redux";

const Post = (props) => {
  const [checkText, setCheckText] = useState(false);
  const [checkSelectButton, setCheckSelectButton] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="post">
      <div className="creator">
        <img
          src="https://khoahocphattrien.vn/Images/Uploaded/Share/2016/12/20/Nhung-buc-anh-dep-nhat-2016-chia-se-tren-Flickr_4.jpg"
          alt=""
        />
        <p>Creator</p>
        <p id="post-date">
          {moment(props.post.createAt).startOf("hour").format("LLL")}{" "}
        </p>
        <div
          id="select-button"
          onClick={() => setCheckSelectButton(!checkSelectButton)}
        >
          <div id="button"></div>
          {checkSelectButton && (
            <div id="select-box">
              <p onClick={() => props.openModal(props.post)}>Update</p>
              <p onClick={() => dispatch(deletePost(props.post._id))}>Delete</p>
            </div>
          )}
        </div>
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
          <p>
            <span className="teaser">{props.post.content.slice(0, 60)}</span>
            {checkText && (
              <span className="complete">
                {props.post.content.slice(60, props.post.content.length)}
              </span>
            )}
            {props.post.content.length > 60 && !checkText && (
              <span className="more" onClick={() => setCheckText(!checkText)}>
                ... See more
              </span>
            )}
            {checkText && (
              <span className="more" onClick={() => setCheckText(!checkText)}>
                &nbsp;Hidden
              </span>
            )}
          </p>
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
