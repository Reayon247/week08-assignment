import { db } from "@/utils/dbConnection";

export default async function multiplayer() {
  const query = await db.query(
    "SELECT * FROM worlds WHERE singleplayer = false"
  );
  const multiplayerWorlds = query.rows;

  return (
    <>
      <h2>These are my multiplayer saves</h2>
      {multiplayerWorlds.map((worlds) => (
        <div key={worlds.id}>
          <h3>
            {worlds.modpack} - {worlds.world_name}
          </h3>
        </div>
      ))}
    </>
  );
}
