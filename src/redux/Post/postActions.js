import * as actions from "./postTypes";
import * as api from "../../api/index";

export const fetchPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: actions.FETCH_POSTS,
      payload: data,
    });
  } catch (err) {
    console.log("Error Fetch Posts: " + err.message);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);
    dispatch({
      type: actions.CREATE_POST,
      payload: data,
    });
  } catch (err) {
    console.log("Error Create Post " + err.message);
  }
};

export const updatePosts = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: actions.UPDATE_POST, payload: data });
  } catch (error) {
    console.log("Error Update Post: " + error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await await api.deletePost(id);

    dispatch({ type: actions.DELETE_POST, payload: id });
  } catch (error) {
    console.log("Error Delete Post: " + error.message);
  }
};
