// ----------
// app/scoreboard/[courtId]/page.tsx
// ----------

"use client";

import { use, useEffect, useState, useCallback } from "react";
//import { useRouter } from "next/navigation";

export default function Scoreboard({
  params,
}: {
  params: Promise<{ courtId: string }>;
}) {
  const { courtId } = use(params);
  const parsedCourtId = parseInt(courtId);
  //const router = useRouter();

  interface Scoreboard {
    id: number;
    teamA: string;
    teamB: string;
    scoreA: number;
    scoreB: number;
    gamesA?: number;
    gamesB?: number;
  }

  const [scoreboard, setScoreboard] = useState<Scoreboard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [lastWinner, setLastWinner] = useState<"A" | "B" | null>(null);
  const [lastScore, setLastScore] = useState<{
    scoreA: number;
    scoreB: number;
  } | null>(null);
  const [flipped, setFlipped] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(`flip-${parsedCourtId}`);
      return stored === "true";
    }
    return false;
  });
  const [betweenSets, setBetweenSets] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const fetchScoreboard = useCallback(async () => {
    try {
      const res = await fetch(`/api/scoreboard/${parsedCourtId}`);
      const data = await res.json();
      setScoreboard(data);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  }, [parsedCourtId]);

  useEffect(() => {
    fetchScoreboard();
  }, [fetchScoreboard]);

  const updateScore = async (deltaA: number, deltaB: number) => {
    if (!scoreboard) return;
    const res = await fetch("/api/scoreboard/update-scores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: scoreboard.id,
        scoreA: scoreboard.scoreA + deltaA,
        scoreB: scoreboard.scoreB + deltaB,
        gamesA: scoreboard.gamesA || 0,
        gamesB: scoreboard.gamesB || 0,
      }),
    });
    if (res.ok) fetchScoreboard();
  };

  const endGame = async () => {
    if (!scoreboard) return;

    const scoreA = scoreboard.scoreA;
    const scoreB = scoreboard.scoreB;
    const gamesA = scoreboard.gamesA || 0;
    const gamesB = scoreboard.gamesB || 0;

    const totalGames = gamesA + gamesB;
    const pointsNeededToWin = totalGames === 2 ? 15 : 25;
    const pointDiff = Math.abs(scoreA - scoreB);

    const aCanWin =
      scoreA >= pointsNeededToWin && scoreA > scoreB && pointDiff >= 2;
    const bCanWin =
      scoreB >= pointsNeededToWin && scoreB > scoreA && pointDiff >= 2;

    if (!aCanWin && !bCanWin) {
      showToast(
        `Cannot end game: A team must score at least ${pointsNeededToWin} and lead by 2.`
      );
      return;
    }

    setLastScore({ scoreA, scoreB });
    setLastWinner(aCanWin ? "A" : "B");

    const newGamesA = aCanWin ? gamesA + 1 : gamesA;
    const newGamesB = bCanWin ? gamesB + 1 : gamesB;

    const res = await fetch("/api/scoreboard/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: scoreboard.id,
        courtId: parsedCourtId,
        teamA: scoreboard.teamA,
        teamB: scoreboard.teamB,
        scoreA: 0,
        scoreB: 0,
        gamesA: newGamesA,
        gamesB: newGamesB,
      }),
    });
    if (res.ok) await fetchScoreboard();
    if ((newGamesA ?? 0) !== 2 && (newGamesB ?? 0) !== 2) {
      setBetweenSets(true); //show between sets message only if match is not complete
    }
  }; // endGame function


  if (error)
    return <div className="p-4 text-center">Error loading scoreboard</div>;
  if (loading || !scoreboard)
    return <div className="p-4 text-center">Loading...</div>;

  const currentSet = (scoreboard.gamesA ?? 0) + (scoreboard.gamesB ?? 0) + 1;
  const matchComplete =
    (scoreboard.gamesA ?? 0) === 2 || (scoreboard.gamesB ?? 0) === 2;


  // show this screen if match is between sets
  if (betweenSets) {
    return (
      <div className="p-6 text-center relative">
        <h1 className="text-3xl font-bold mb-4">Court {parsedCourtId}</h1>
        <p className="text-xl text-yellow-600 font-semibold mb-4">
          This match is between sets.
        </p>
        <div className="flex flex-row gap-4 justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="text-xl mb-2">{scoreboard.teamA}</div>
            <div className="text-4xl mt-2">{scoreboard.gamesA ?? 0}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xl mb-2">{scoreboard.teamB}</div>
            <div className="text-4xl mt-2">{scoreboard.gamesB ?? 0}</div>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={async () => {
              if (!scoreboard || !lastScore || !lastWinner) return;

              const updatedScoreA = lastScore.scoreA;
              const updatedScoreB = lastScore.scoreB;
              const updatedGamesA =
                lastWinner === "A" && (scoreboard.gamesA ?? 0) > 0
                  ? (scoreboard.gamesA ?? 0) - 1
                  : scoreboard.gamesA ?? 0;
              const updatedGamesB =
                lastWinner === "B" && (scoreboard.gamesB ?? 0) > 0
                  ? (scoreboard.gamesB ?? 0) - 1
                  : scoreboard.gamesB ?? 0;

              setBetweenSets(false); // Hide the between sets message

              const res = await fetch("/api/scoreboard/update", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  id: scoreboard.id,
                  courtId: parsedCourtId,
                  teamA: scoreboard.teamA,
                  teamB: scoreboard.teamB,
                  scoreA: updatedScoreA,
                  scoreB: updatedScoreB,
                  gamesA: updatedGamesA,
                  gamesB: updatedGamesB,
                }),
              });
              if (res.ok) fetchScoreboard();
            }}
            className="w-32 sm:w-40 md:w-48 bg-gray-500 text-white py-2 rounded cursor-pointer"
          >
            Undo End Set
          </button>
          <button
            onClick={() => setBetweenSets(false)}
            className="w-32 sm:w-40 md:w-48 bg-blue-500 text-white py-2 rounded cursor-pointer ml-4"
          >
            Go to Next Set
          </button>
        </div>
      </div>
    );
  }


  // show this screen if match is complete
  if (matchComplete) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Court {parsedCourtId}</h1>
        <p className="text-xl text-green-600 font-semibold mb-4">
          This match has completed.
        </p>
        <div className="flex flex-row gap-4 justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="text-xl mb-2">{scoreboard.teamA}</div>
            <div className="text-4xl mt-2">{scoreboard.gamesA ?? 0}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xl mb-2">{scoreboard.teamB}</div>
            <div className="text-4xl mt-2">{scoreboard.gamesB ?? 0}</div>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={async () => {
              if (!scoreboard || !lastScore || !lastWinner) return;

              const updatedScoreA = lastScore.scoreA;
              const updatedScoreB = lastScore.scoreB;
              const updatedGamesA =
                lastWinner === "A" && (scoreboard.gamesA ?? 0) > 0
                  ? (scoreboard.gamesA ?? 0) - 1
                  : scoreboard.gamesA ?? 0;
              const updatedGamesB =
                lastWinner === "B" && (scoreboard.gamesB ?? 0) > 0
                  ? (scoreboard.gamesB ?? 0) - 1
                  : scoreboard.gamesB ?? 0;

              const res = await fetch("/api/scoreboard/update", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  id: scoreboard.id,
                  courtId: parsedCourtId,
                  teamA: scoreboard.teamA,
                  teamB: scoreboard.teamB,
                  scoreA: updatedScoreA,
                  scoreB: updatedScoreB,
                  gamesA: updatedGamesA,
                  gamesB: updatedGamesB,
                }),
              });
              if (res.ok) fetchScoreboard();
            }}
            className="w-32 sm:w-40 md:w-48 bg-gray-500 text-white py-2 rounded cursor-pointer"
          >
            Undo End Set
          </button>
        </div>
      </div>
    );
  }

  // default screen to control the scoreboard
  return (
    <div className="relative p-4 text-center">
      {toastMessage && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-400 text-white px-6 py-3 rounded shadow-lg z-50 transition-opacity duration-500 opacity-100 animate-fade">
          {toastMessage}
        </div>
      )}

      <h1 className="text-2xl font-bold mb-13">Court {parsedCourtId}</h1>

      <div className="grid grid-cols-3 gap-4 justify-center items-start">
        {/* Team A */}
        {flipped ? (
          <div className="flex flex-col items-center">
            <div className="text-xl mb-2">{scoreboard.teamB}</div>
            <div className="flex items-center gap-4">
              <div className="text-5xl font-bold">{scoreboard.scoreB}</div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => updateScore(0, 1)}
                  className="w-12 sm:w-16 md:w-20 bg-green-500 text-white py-1 sm:py-2 rounded cursor-pointer"
                >
                  +1
                </button>
                <button
                  onClick={() => updateScore(0, -1)}
                  className="w-12 sm:w-16 md:w-20 bg-red-500 text-white py-1 sm:py-2 rounded cursor-pointer"
                >
                  -1
                </button>
              </div>
            </div>
            <div className="text-sm mt-2">
              Games Won: {scoreboard.gamesB ?? 0}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="text-xl mb-2">{scoreboard.teamA}</div>
            <div className="flex items-center gap-4">
              <div className="text-5xl font-bold">{scoreboard.scoreA}</div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => updateScore(1, 0)}
                  className="w-12 sm:w-16 md:w-20 bg-green-500 text-white py-1 sm:py-2 rounded cursor-pointer"
                >
                  +1
                </button>
                <button
                  onClick={() => updateScore(-1, 0)}
                  className="w-12 sm:w-16 md:w-20 bg-red-500 text-white py-1 sm:py-2 rounded cursor-pointer"
                >
                  -1
                </button>
              </div>
            </div>
            <div className="text-sm mt-2">
              Games Won: {scoreboard.gamesA ?? 0}
            </div>
          </div>
        )}

        {/* Set Display */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-xl font-semibold">Set {currentSet}</div>
        </div>

        {/* Team B */}
        {flipped ? (
          <div className="flex flex-col items-center">
            <div className="text-xl mb-2">{scoreboard.teamA}</div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => updateScore(1, 0)}
                  className="w-12 sm:w-16 md:w-20 bg-green-500 text-white py-1 sm:py-2 rounded cursor-pointer"
                >
                  +1
                </button>
                <button
                  onClick={() => updateScore(-1, 0)}
                  className="w-12 sm:w-16 md:w-20 bg-red-500 text-white py-1 sm:py-2 rounded cursor-pointer"
                >
                  -1
                </button>
              </div>
              <div className="text-5xl font-bold">{scoreboard.scoreA}</div>
            </div>
            <div className="text-sm mt-2">
              Games Won: {scoreboard.gamesA ?? 0}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="text-xl mb-2">{scoreboard.teamB}</div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => updateScore(0, 1)}
                  className="w-12 sm:w-16 md:w-20 bg-green-500 text-white py-1 sm:py-2 rounded cursor-pointer"
                >
                  +1
                </button>
                <button
                  onClick={() => updateScore(0, -1)}
                  className="w-12 sm:w-16 md:w-20 bg-red-500 text-white py-1 sm:py-2 rounded cursor-pointer"
                >
                  -1
                </button>
              </div>
              <div className="text-5xl font-bold">{scoreboard.scoreB}</div>
            </div>
            <div className="text-sm mt-2">
              Games Won: {scoreboard.gamesB ?? 0}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-center">
        <button
          onClick={() => {
            setFlipped((prev) => {
              const newState = !prev;
              localStorage.setItem(
                `flip-${parsedCourtId}`,
                newState.toString()
              );
              return newState;
            });
          }}
          className="w-32 sm:w-40 md:w-48 bg-purple-600 text-white px-4 py-2 rounded cursor-pointer"
        >
          Switch Sides
        </button>
      </div>

      <div className="mt-4 flex justify-center">
        <button
          onClick={endGame}
          className="w-32 sm:w-40 md:w-48 bg-yellow-500 text-black py-2 rounded cursor-pointer"
        >
          End Set
        </button>
      </div>

      {/* <div className="mt-4 flex justify-center">
        <button
          onClick={() => router.push("/")}
          className="w-32 sm:w-40 md:w-48 bg-blue-600 text-white py-2 rounded cursor-pointer"
        >
          ← Back to Home
        </button>
      </div> */}
    </div>
  );
}
