"use client";

import { deleteComment } from "@/utils/delete";
import styles from "@/Styles/Comments.module.css";

export default function DeleteButton(props) {
  const commentId = props.commentId;
  const worldId = props.selectedWorld;

  return (
    <>
      <button
        onClick={() => {
          deleteComment(commentId, worldId);
        }}
        className={styles.delete}
      >
        Delete
      </button>
    </>
  );
}
