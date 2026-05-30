import Link from 'next/link';
import gamesData from '@/app/data/games.json';

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 bg-white text-zinc-950 min-h-screen selection:bg-zinc-200">
      {/* Header com borda fina (Estilo revista técnica / minimalista) */}
      <header className="border-b border-zinc-200 pb-8 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight uppercase">Jornal de Games</h1>
          <p className="text-zinc-500 text-sm mt-1 font-mono">_log_de_sistemas_e_experiencias</p>
        </div>
        <div className="text-xs font-mono text-zinc-400">
          Total: {gamesData.length} jogos analisados
        </div>
      </header>

      {/* Grid Clean */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gamesData.map((game) => (
          <Link 
            href={`/games/${game.id}`} 
            key={game.id}
            className="group block border border-zinc-200 p-6 hover:border-zinc-950 transition-colors bg-zinc-50/50"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase bg-zinc-200/60 text-zinc-800 px-2 py-0.5 border border-zinc-300/30">
                {game.platform}
              </span>
              <span className="text-sm text-zinc-800 tracking-widest font-mono">
                {'★'.repeat(game.personalScore)}
              </span>
            </div>

            <h2 className="text-xl font-bold tracking-tight text-zinc-900 group-hover:underline">
              {game.title}
            </h2>
            
            <div className="mt-6 pt-4 border-t border-zinc-200/60 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Status: <span className="text-emerald-600 font-bold">{game.status}</span></span>
              <span>{game.finishedDate}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}