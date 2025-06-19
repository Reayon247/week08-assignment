export default function Comments(props) {
  const comments = props.commentArray;
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.name}</p>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}
