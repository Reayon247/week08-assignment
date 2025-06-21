import { db } from "@/utils/dbConnection";
import Link from "next/link";
import styles from "@/Styles/WorldList.module.css";
import Image from "next/image";
import imgGallery from "@/utils/gallery";

export default async function singleplayer({ searchParams }) {
  const queryString = await searchParams;

  const query = await db.query(
    "SELECT * FROM worlds WHERE singleplayer = true"
  );
  const singleplayerWorlds = query.rows;
  let search = null;

  //Query string
  if (queryString.sort === "asc") {
    singleplayerWorlds.sort((a, b) => {
      return a.date_started.localeCompare(b.date_started);
    });
    search = "ascending";
  } else if (queryString.sort === "desc") {
    singleplayerWorlds.sort((a, b) => {
      return b.date_started.localeCompare(a.date_started);
    });
    search = "descending";
  }

  return (
    <main>
      <h2 className={styles.title}>These are my singleplayer saves</h2>
      <h3 className={styles.navtitle}>Sort by date:</h3>
      <p className={styles.navtitle}>Currently: {search}</p>
      <nav className={styles.sortcon}>
        <Link className={styles.linkasc} href={"/singleplayer?sort=asc"}>
          Sort Asc
        </Link>
        <Link className={styles.linkdesc} href={"/singleplayer?sort=desc"}>
          Sort Desc
        </Link>
      </nav>
      <div className={styles.postcontainer}>
        {/* fiter the image worldid and image preview */}
        {singleplayerWorlds.map((worlds) => {
          const previewImage = imgGallery.find(
            (image) => image.worldId === worlds.id && image.preview === true
          );
          return (
            <Link
              key={worlds.id}
              href={`/singleplayer/${worlds.id}`}
              className={styles.linkbox}
            >
              <h3 className={styles.name}>
                {worlds.modpack} - {worlds.world_name}
              </h3>
              <h4 className={styles.date}>
                Date Started: {worlds.date_started}
              </h4>
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
      </div>
    </main>
  );
}
