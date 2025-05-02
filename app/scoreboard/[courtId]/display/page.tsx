// ----------
// app/scoreboard/[courtId]/display/page.tsx (Green screen background with blue team panels)
// ----------

'use client'

import { useEffect, useState } from 'react'

export default function ScoreboardDisplay({ params }: { params: { courtId: string } }) {
  const courtId = parseInt(params.courtId)
  interface Scoreboard {
    teamA: string;
    scoreA: number;
    teamB: string;
    scoreB: number;
    gamesA?: number;
    gamesB?: number;
  }

  const [scoreboard, setScoreboard] = useState<Scoreboard | null>(null)

  const fetchScore = async () => {
    const res = await fetch(`/api/scoreboard/${courtId}`)
    const data = await res.json()
    setScoreboard(data)
  }

  useEffect(() => {
    fetchScore()
    const interval = setInterval(fetchScore, 3000)
    return () => clearInterval(interval)
  }, [])

  if (!scoreboard) {
    return <div className="p-4 text-center text-white">Loading scoreboard...</div>
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-600 text-white font-bold text-lg">
      <div className="w-11/12 max-w-xl bg-black rounded-lg overflow-hidden shadow-lg">
        <div className="grid grid-cols-5 text-center text-white text-xl">
          <div className="col-span-3 bg-gradient-to-r from-blue-700 to-blue-500 p-4 border-b border-white">
            {scoreboard.teamA}
          </div>
          <div className="bg-gray-800 p-4 border-b border-white">
            {scoreboard.scoreA}
          </div>
          <div className="bg-yellow-500 text-black p-4 border-b border-white">
            {scoreboard.gamesA ?? 0}
          </div>
          <div className="col-span-3 bg-gradient-to-r from-blue-700 to-blue-500 p-4">
            {scoreboard.teamB}
          </div>
          <div className="bg-gray-800 p-4">
            {scoreboard.scoreB}
          </div>
          <div className="bg-yellow-500 text-black p-4">
            {scoreboard.gamesB ?? 0}
          </div>
        </div>
      </div>
    </div>
  )
}
