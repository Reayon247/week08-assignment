import { db } from "@/utils/dbConnection";
import Link from "next/link";
import styles from "@/Styles/WorldList.module.css";
import Image from "next/image";
import imgGallery from "@/utils/gallery";

export default async function multiplayer({ searchParams }) {
  const queryString = await searchParams;

  const query = await db.query(
    "SELECT * FROM worlds WHERE singleplayer = false"
  );
  const multiplayerWorlds = query.rows;
  let search = null;

  //Query string
  if (queryString.sort === "asc") {
    multiplayerWorlds.sort((a, b) => {
      return a.date_started.localeCompare(b.date_started);
    });
    search = "ascending";
  } else if (queryString.sort === "desc") {
    multiplayerWorlds.sort((a, b) => {
      return b.date_started.localeCompare(a.date_started);
    });
    search = "descending";
  }

  return (
    <main>
      <h2 className={styles.title}>These are my multiplayer saves</h2>
      <h3 className={styles.navtitle}>Sort by date:</h3>
      <p className={styles.navtitle}>Currently: {search}</p>
      <nav className={styles.sortcon}>
        <Link className={styles.linkasc} href={"/multiplayer?sort=asc"}>
          Sort Asc
        </Link>
        <Link className={styles.linkdesc} href={"/multiplayer?sort=desc"}>
          Sort Desc
        </Link>
      </nav>
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
