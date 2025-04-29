import React, { useContext, useRef } from "react";
import { PostList } from "./store/PostListStore";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postReactionsElement = useRef();
  const postTagsElement = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postReactions = postReactionsElement.current.value;
    const postTags = postTagsElement.current.value.split(" ");
    addPost(userId, postBody, postTitle, postReactions, postTags);
    alert("Post Added Successfully!");
    clearForm();
  };
  const clearForm = () => {
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    postReactionsElement.current.value = "";
    postTagsElement.current.value = "";
  };
  return (
    <form className="createPost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="user_Id" className="form-label">
          Enter your user ID:
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="postID"
          placeholder="e.g user_9"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="post_title" className="form-label">
          Title of you post:
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="write title for the post"
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="post_content" className="form-label">
          Write something About your post:
        </label>
        <br />
        <textarea
          ref={postBodyElement}
          id="body"
          name=""
          rows="4"
          cols="40"
          placeholder="write some text for your post "
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hashtags#:
        </label>
        <input
          ref={postTagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="add some hashtags(#) to inhance post visiblity"
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="hashtags" className="form-label">
          Number of Reactions:
        </label>
        <input
          ref={postReactionsElement}
          type="number"
          className="form-control"
          id="reactions"
          placeholder="e.g. 0,1,2..."
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        POST
      </button>
    </form>
  );
};

export default CreatePost;
