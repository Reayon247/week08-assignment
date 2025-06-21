import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import styles from "@/Styles/CommentsForm.module.css";
// import { redirect } from "next/navigation";

export default function CommentsForm(props) {
  const worldID = props.selectedWorld;
  const type = props.type;
  let worldType = null;

  if (type === true) {
    worldType = "singleplayer";
  } else {
    worldType = "multiplayer";
  }

  async function handleSubmit(formData) {
    "use server";

    formData = {
      name: formData.get("name"),
      comment: formData.get("comment"),
    };

    await db.query(
      `INSERT INTO world_comments (name, comment, world_id) VALUES ($1, $2, $3)`,
      [formData.name, formData.comment, worldID]
    );

    revalidatePath(`/${worldID}`);

    // this is just to show I know how redirects work, Ive got no use for it atm as the comments box is right next to the form
    // redirect(`/${worldType}/${worldID}`);
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
