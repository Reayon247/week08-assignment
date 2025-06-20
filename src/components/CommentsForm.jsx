import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import styles from "@/Styles/CommentsForm.module.css";

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
    <div className={styles.form}>
      <h2 className={styles.title}>Leave a comment!</h2>
      <form action={handleSubmit} className={styles.formcon}>
        <label className={styles.label} htmlFor="name">
          Your name:
        </label>
        <input className={styles.input} type="text" name="name" required />
        <label className={styles.label} htmlFor="comment">
          Your comment:
        </label>
        <input className={styles.input} type="text" name="comment" required />
        <button className={styles.submit} type="submit">
          Post
        </button>
      </form>
    </div>
  );
}
