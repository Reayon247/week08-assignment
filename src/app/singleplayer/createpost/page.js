import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import styles from "@/Styles/CommentsForm.module.css";
import { redirect } from "next/navigation";
import { SignedIn } from "@clerk/nextjs";

export default function createPost() {
  async function handleSubmit(formData) {
    "use server";

    formData = {
      modpack: formData.get("modpack"),
      world_name: formData.get("world_name"),
      singleplayer: true,
      hours: formData.get("hours"),
      date_started: formData.get("date_started"),
      overview: formData.get("overview"),
    };

    await db.query(
      `INSERT INTO worlds (modpack, world_name, singleplayer, hours, date_started, overview) VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        formData.modpack,
        formData.world_name,
        formData.singleplayer,
        formData.hours,
        formData.date_started,
        formData.overview,
      ]
    );

    revalidatePath(`/singleplayer`);

    redirect(`/singleplayer?sort=desc`);
  }

  return (
    <SignedIn>
      <div className={styles.form}>
        <h1 className={styles.title}>Create New minecraft world post</h1>
        <form action={handleSubmit} className={styles.formcon}>
          <label htmlFor="modpack" className={styles.label}>
            Modpack Name:
          </label>
          <input type="text" name="modpack" required className={styles.input} />
          <label htmlFor="world_name" className={styles.label}>
            World Name:
          </label>
          <input
            type="text"
            name="world_name"
            required
            className={styles.input}
          />
          <label htmlFor="hours" className={styles.label}>
            Hours played:
          </label>
          <input type="number" name="hours" required className={styles.input} />
          <label htmlFor="date_started" className={styles.label}>
            When did you start the modpack:
          </label>
          <input
            type="date"
            name="date_started"
            required
            className={styles.input}
          />
          <label htmlFor="overview" className={styles.label}>
            The overview of the pack:
          </label>
          <input
            type="text"
            name="overview"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.submit}>
            Submit
          </button>
        </form>
      </div>
    </SignedIn>
  );
}
