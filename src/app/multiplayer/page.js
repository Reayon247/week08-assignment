import { db } from "@/utils/dbConnection";
import Link from "next/link";
import styles from "@/Styles/WorldList.module.css";
import Image from "next/image";
import imgGallery from "@/utils/gallery";

export default async function multiplayer() {
  const query = await db.query(
    "SELECT * FROM worlds WHERE singleplayer = false"
  );
  const multiplayerWorlds = query.rows;

  return (
    <main>
      <h2 className={styles.title}>These are my multiplayer saves</h2>
      {multiplayerWorlds.map((worlds) => {
        const previewImage = imgGallery.find(
          (image) => image.worldId === worlds.id && image.preview === true
        );
        return (
          <Link
            key={worlds.id}
            href={`/multiplayer/${worlds.id}`}
            className={styles.linkbox}
          >
            <h3 className={styles.name}>
              {worlds.modpack} - {worlds.world_name}
            </h3>
            <h4 className={styles.date}>Date Started: {worlds.date_started}</h4>
            <Image
              src={previewImage.img_var}
              alt={previewImage.img_alt}
              width={400}
              height="auto"
              priority={true}
            />
          </Link>
        );
      })}
    </main>
  );
}
