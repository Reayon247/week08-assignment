import styles from "@/Styles/Comments.module.css";

export default function Comments(props) {
  const comments = props.commentArray;
  return (
    <div className={styles.commentcon}>
      <h2 className={styles.title}>Comments</h2>
      <div className={styles.justcommentscon}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.commentbox}>
            <p className={styles.commentname}>{comment.name} says: </p>
            <p className={styles.commentcomment}>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
