import { db } from "@/utils/dbConnection";
import Link from "next/link";

export default async function singleplayer() {
  const query = await db.query(
    "SELECT * FROM worlds WHERE singleplayer = true"
  );
  const singleplayerWorlds = query.rows;

  return (
    <>
      <h2>These are my singleplayer saves</h2>
      {singleplayerWorlds.map((worlds) => (
        <Link key={worlds.id} href={`/singleplayer/${worlds.id}`}>
          <h3>
            {worlds.modpack} - {worlds.world_name}
          </h3>
        </Link>
      ))}
    </>
  );
}
