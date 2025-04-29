import { Children, createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
// reducer function
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((post) => post.id !== action.payload.id);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
   
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFALT_POST_LIST
  );
  const addPost = (userId, postBody, postTitle, postReactions, postTags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: postReactions,
        userId: userId,
        tags: postTags,
      },
    });
    // console.log(
    //   `${userId},${postBody},${postTitle},${postReactions},${postTags}`
    // );
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id: postId,
      },
    });
    // console.log(`delete post is called for  : ${postId}`);
  };
  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEFALT_POST_LIST = [
  {
    id: "1",
    title: "Going to Islamabad",
    body: "Hey frends! i am going to islamabad, for trip",
    reactions: 4,
    userId: "user_9",
    tags: ["Trip", "Pak-Capital", "islamabad"],
  },
  {
    id: "2",
    title: "Attending the TECH ceminar",
    body: "Hey frends! i am going to attend the biggest tech ceminar at Lahore",
    reactions: 10,
    userId: "user_10",
    tags: ["TECH ceminar", "Lahore", "IT"],
  },
];
export default PostListProvider;
