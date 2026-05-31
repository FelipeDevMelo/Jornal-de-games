import Link from "next/link";
import gamesData from "@/app/data/games.json";

export default function Home() {
  return (
    <main>
      <header className="h-20">
        <div>
          <div>CL</div>
          <div>
            {" "}
            <h3>Captain's Log</h3> <h6>Personal Game Journal</h6>
          </div>
        </div>
      </header>
      <h1>Bem-vindo!</h1>
      {gamesData.map((game) => (
        <Link href={`/games/${game.id}`} key={game.id}>
          <div>{game.title}</div>
        </Link>
      ))}
    </main>
  );
}
