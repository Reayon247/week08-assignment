import Comments from "@/components/Comments";
import CommentsForm from "@/components/CommentsForm";
import Gallery from "@/components/Gallery";
import { db } from "@/utils/dbConnection";

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

  console.log(commentData);

  return (
    <>
      <div>
        <h2>{worldData.modpack}</h2>
        <h3>{worldData.world_name}</h3>
        <h3>{worldData.hours}</h3>
        <h3>{worldData.date_started}</h3>
      </div>
      <p>{worldData.overview}</p>
      <Gallery />
      <CommentsForm selectedWorld={worldData.id} />
      <Comments commentArray={commentData} />
    </>
  );
}
