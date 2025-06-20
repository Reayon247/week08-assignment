"use client";

import { deleteComment } from "@/utils/delete";

export default function DeleteButton(props) {
  const commentId = props.commentId;
  const worldId = props.selectedWorld;

  return (
    <>
      <button
        onClick={() => {
          deleteComment(commentId, worldId);
        }}
      >
        Delete
      </button>
    </>
  );
}
