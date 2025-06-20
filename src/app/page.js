import homeStyle from "@/Styles/Home.module.css";

export default function Home() {
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
    </main>
  );
}
