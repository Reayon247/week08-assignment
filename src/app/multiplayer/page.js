import { db } from "@/utils/dbConnection";
import Link from "next/link";

export default async function multiplayer() {
  const query = await db.query(
    "SELECT * FROM worlds WHERE singleplayer = false"
  );
  const multiplayerWorlds = query.rows;

  return (
    <>
      <h2>These are my multiplayer saves</h2>
      {multiplayerWorlds.map((worlds) => (
        <Link key={worlds.id} href={`/multiplayer/${worlds.id}`}>
          <h3>
            {worlds.modpack} - {worlds.world_name}
          </h3>
        </Link>
      ))}
    </>
  );
}
