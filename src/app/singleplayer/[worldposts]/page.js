import Comments from "@/components/Comments";
import CommentsForm from "@/components/CommentsForm";
import Gallery from "@/components/Gallery";
import { db } from "@/utils/dbConnection";
import styles from "@/Styles/WorldPosts.module.css";

export default async function WorldPosts({ params }) {
  const worldId = params.worldposts;

  const query = await db.query(
    `SELECT * FROM worlds 
    WHERE id = $1`,
    [worldId]
  );

  const commentsQuery = await db.query(
    "SELECT * FROM world_comments WHERE world_id = $1",
    [worldId]
  );

  const worldData = query.rows[0];
  const commentData = commentsQuery.rows;

  return (
    <main>
      <div className={styles.info}>
        <h2>{worldData.modpack}</h2>
        <h3>{worldData.world_name}</h3>
        <h3>Hours played: {worldData.hours}</h3>
        <h3>Date Started: {worldData.date_started}</h3>
      </div>
      <p className={styles.overview}>{worldData.overview}</p>
      <Gallery selectedWorld={worldData.id} />
      <CommentsForm
        selectedWorld={worldData.id}
        type={worldData.singleplayer}
      />
      <Comments commentArray={commentData} selectedWorld={worldData.id} />
    </main>
  );
}
