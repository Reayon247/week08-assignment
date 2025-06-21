import styles from "@/Styles/Comments.module.css";
import DeleteButton from "./DeleteButton";

export default function Comments(props) {
  const comments = props.commentArray;

  comments.sort((a, b) => b.id - a.id);

  return (
    <div className={styles.commentcon}>
      <h2 className={styles.title}>Comments</h2>
      <div className={styles.justcommentscon}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.commentbox}>
            <p className={styles.commentname}>{comment.name} says: </p>
            <p className={styles.commentcomment}>{comment.comment}</p>
            <DeleteButton
              commentId={comment.id}
              selectedWorld={props.selectedWorld}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
