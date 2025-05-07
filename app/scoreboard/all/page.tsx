// ----------
// app/scoreboard/all/page.tsx
// ----------

"use client";

import { useEffect, useState } from "react";

export default function AllScoreboards() {
  interface Scoreboard {
    courtId: number;
    teamA: string;
    scoreA: number;
    teamB: string;
    scoreB: number;
    gamesA?: number;
    gamesB?: number;
  }

  const [scoreboards, setScoreboards] = useState<Scoreboard[] | null>(null);

  useEffect(() => {
    const fetchAll = async () => {
      const courtRes = await fetch("/api/courts");
      const courts = await courtRes.json();

      const scoreboardData = await Promise.all(
        courts.map(async (court: { id: number }) => {
          const res = await fetch(`/api/scoreboard/${court.id}`);
          const data = await res.json();
          return { courtId: court.id, ...data };
        })
      );

      setScoreboards(scoreboardData);
    };

    fetchAll();
    const interval = setInterval(fetchAll, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!scoreboards || scoreboards.length === 0) {
    return (
      <div className="p-4 text-center text-white">
        Loading all scoreboards...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-400 text-white font-bold text-lg p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
      {scoreboards.map((s) => (
        <div
          key={s.courtId}
          className="bg-black rounded-lg overflow-hidden shadow-lg h-[165px]"
        >
          <div className="grid grid-cols-5 text-center text-white text-xl">
            <div className="col-span-5 bg-yellow-600 p-2 text-black font-bold">
              Court {s.courtId}
            </div>
            <div className="col-span-3 bg-gradient-to-r from-blue-700 to-blue-500 p-4 border-b border-white">
              {s.teamA}
            </div>
            <div className="bg-gray-800 p-4 border-b border-white">
              {s.scoreA}
            </div>
            <div className="bg-yellow-500 text-black p-4 border-b border-white">
              {s.gamesA ?? 0}
            </div>
            <div className="col-span-3 bg-gradient-to-r from-blue-700 to-blue-500 p-4">
              {s.teamB}
            </div>
            <div className="bg-gray-800 p-4">{s.scoreB}</div>
            <div className="bg-yellow-500 text-black p-4">{s.gamesB ?? 0}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
