import Link from "next/link";
import headerStyles from "@/Styles/Header.module.css";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.title}>Reayon's Minecraft World Log</h1>
      <nav className={headerStyles.nav}>
        <Link href={"/"} className={headerStyles.links}>
          Home
        </Link>
        <Link href={"/singleplayer?sort=desc"} className={headerStyles.links}>
          Singleplayer Worlds
        </Link>
        <Link href={"/multiplayer?sort=desc"} className={headerStyles.links}>
          Multiplayer Worlds
        </Link>
      </nav>
    </header>
  );
}
