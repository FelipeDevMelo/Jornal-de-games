import gamesData from "@/app/data/games.json";

interface GamePageProps {
  params: Promise<{
    id: string;
  }>;
}
export default async function GamePage({ params }: GamePageProps) {
  const { id } = await params;
  const game = gamesData.find((g) => g.id === id);
  if (!game) {
    return <h1>Jogo não encontrado!</h1>;
  }
  return (
    <main className="p-8 font-sans gap-12">
      <h1 className="text-3xl font-bold uppercase mb-8">{game.title}</h1>
      <section>
        <h2 className="text-xl font-bold text-zinc-400 mb-4">
          1. Techinical Lens
        </h2>
        <p>
          Core loop: <strong>{game.review.technicalLens.coreLoop}</strong>
        </p>
      </section>

      <section className="grid grid-cols-2 gap-6 mt-12 ">
        <div className="text-emerald-950 p-3 bg-emerald-100 rounded-lg border-emerald-200 border-2">
          <h3 className="font-bold">Bug report</h3>
          <p>{game.review.gameDevVerdict.bugReport}</p>
        </div>
        <div className="text-amber-950 p-3 bg-amber-100 rounded-lg border-amber-200 border-2">
          <h3 className="font-bold">Golden ticket</h3>
          <p>{game.review.gameDevVerdict.goldenTicket}</p>
        </div>
      </section>
    </main>
  );
}
