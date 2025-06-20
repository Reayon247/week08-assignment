import { db } from "@/utils/dbConnection";
import Link from "next/link";
import styles from "@/Styles/WorldList.module.css";

export default async function singleplayer() {
  const query = await db.query(
    "SELECT * FROM worlds WHERE singleplayer = true"
  );
  const singleplayerWorlds = query.rows;

  return (
    <main>
      <h2 className={styles.title}>These are my singleplayer saves</h2>
      {singleplayerWorlds.map((worlds) => (
        <Link
          key={worlds.id}
          href={`/singleplayer/${worlds.id}`}
          className={styles.linkbox}
        >
          <h3 className={styles.name}>
            {worlds.modpack} - {worlds.world_name}
          </h3>
          <h4 className={styles.date}>Date Started: {worlds.date_started}</h4>
        </Link>
      ))}
    </main>
  );
}
