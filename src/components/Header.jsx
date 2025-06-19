import Link from "next/link";

export default function Header() {
  return (
    <>
      <h1>Reayons Minecraft Worlds Log</h1>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/singleplayer"}>Singleplayer Worlds</Link>
        <Link href={"/multiplayer"}>Multiplayer Worlds</Link>
      </nav>
    </>
  );
}
