import * as actions from "./postTypes";

export const postReducer = (posts = [], action) => {
  switch (action.type) {
    case actions.FETCH_POSTS:
      return action.payload;

    case actions.CREATE_POST:
      return [...posts, action.payload];

    default:
      return posts;
  }
};
