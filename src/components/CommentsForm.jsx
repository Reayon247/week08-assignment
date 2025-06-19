import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";

export default function CommentsForm(props) {
  const worldID = props.selectedWorld;

  async function handleSubmit(formData) {
    "use server";

    formData = {
      name: formData.get("name"),
      comment: formData.get("comment"),
    };

    db.query(
      `INSERT INTO world_comments (name, comment, world_id) VALUES ($1, $2, $3)`,
      [formData.name, formData.comment, worldID]
    );

    revalidatePath(`/${worldID}`);
  }

  return (
    <>
      <h2>Leave a comment!</h2>
      <form action={handleSubmit}>
        <label htmlFor="name">Your name</label>
        <input type="text" name="name" required />
        <label htmlFor="comment">Your comment</label>
        <input type="text" name="comment" required />
        <button type="submit">Post</button>
      </form>
    </>
  );
}
