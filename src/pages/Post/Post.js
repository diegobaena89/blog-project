import React from "react";

// hooks
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

// css
import styles from "./Post.module.css";

const Post = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
        </>
      )}
    </div>
  );
};

export default Post;
