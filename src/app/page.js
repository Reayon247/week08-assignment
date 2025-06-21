import homeStyle from "@/Styles/Home.module.css";
import { db } from "@/utils/dbConnection";
import Link from "next/link";
import styles from "@/Styles/WorldList.module.css";
import Image from "next/image";
import imgGallery from "@/utils/gallery";

export default async function Home() {
  const query = await db.query(
    "SELECT * from worlds ORDER BY date_started DESC LIMIT 1; "
  );

  const latestWorld = query.rows[0];

  const worldId = latestWorld.id;
  const type = latestWorld.singleplayer;
  let worldType = null;

  if (type === true) {
    worldType = "singleplayer";
  } else {
    worldType = "multiplayer";
  }

  const previewImage = imgGallery.find(
    (image) => image.worldId === worldId && image.preview === true
  );

  return (
    <main>
      <h2 className={homeStyle.title}>Welcome to my minecraft world log</h2>
      <p className={homeStyle.about}>
        This log features most of my minecraft worlds, with screenshots of my
        base and builds. To view my solo worlds have a look at the singleplayer
        worlds tab. If you fancy seeing my builds on different servers with
        friends, along with their builds as well, click the multiplayer worlds
        tab.
      </p>
      <h2 className={homeStyle.title}>Latest minecraft world:</h2>
      <Link href={`/${worldType}/${latestWorld.id}`} className={styles.linkbox}>
        <h3 className={styles.name}>
          {latestWorld.modpack} - {latestWorld.world_name}
        </h3>
        <h4 className={styles.date}>
          Date Started: {latestWorld.date_started}
        </h4>
        <Image
          src={previewImage.img_var}
          alt={previewImage.img_alt}
          width={400}
          height="auto"
          priority={true}
        />
      </Link>
    </main>
  );
}
