import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "./store/PostListStore";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (postList.length === 0) {
      setFetching(true);
      fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then((data) => {
          addInitialPosts(data.posts);
          setFetching(false);
        });
    }
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {!fetching &&
        postList.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </>
  );
};

export default PostList;
