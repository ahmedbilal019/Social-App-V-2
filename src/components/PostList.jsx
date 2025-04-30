import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "./store/PostListStore";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        // console.log(data.posts);
      });

    // console.log("post fetched button is clicked ");
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick}></WelcomeMessage>
      )}
      {postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};

export default PostList;
