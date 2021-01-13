import * as actions from "./postTypes";

export const postReducer = (posts = [], action) => {
  switch (action.type) {
    case actions.FETCH_POSTS:
      return action.payload;

    case actions.CREATE_POST:
      return [...posts, action.payload];

    case actions.UPDATE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case actions.DELETE_POST:
      return posts.filter((post) => post._id !== action.payload);

    default:
      return posts;
  }
};
