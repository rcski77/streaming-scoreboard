// ----------
// app/scoreboard/[courtId]/page.tsx
// ----------

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Scoreboard({ params }: { params: { courtId: string } }) {
  const courtId = parseInt(params.courtId)
  const router = useRouter()

  interface Scoreboard {
    teamA: string
    teamB: string
    scoreA: number
    scoreB: number
  }

  const [scoreboard, setScoreboard] = useState<Scoreboard | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchScoreboard = async () => {
    try {
      const res = await fetch(`/api/scoreboard/${courtId}`)
      const data = await res.json()
      setScoreboard(data)
      setLoading(false)
    } catch {
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchScoreboard()
  }, [])

  const updateScore = async (deltaA: number, deltaB: number) => {
    if (!scoreboard) return
    const res = await fetch('/api/scoreboard/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        courtId,
        teamA: scoreboard.teamA,
        teamB: scoreboard.teamB,
        scoreA: scoreboard.scoreA + deltaA,
        scoreB: scoreboard.scoreB + deltaB,
      })
    })
    if (res.ok) fetchScoreboard()
  }

  if (error) return <div className="p-4 text-center">Error loading scoreboard</div>
  if (loading || !scoreboard) return <div className="p-4 text-center">Loading...</div>

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Court {courtId}</h1>
      <div className="text-xl mb-4">{scoreboard.teamA} vs {scoreboard.teamB}</div>

      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div>
          <div className="text-3xl font-bold mb-2">{scoreboard.scoreA}</div>
          <button
            onClick={() => updateScore(1, 0)}
            className="bg-green-500 text-white px-4 py-2 rounded mb-2"
          >
            +1 {scoreboard.teamA}
          </button>
          <br />
          <button
            onClick={() => updateScore(-1, 0)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            -1 {scoreboard.teamA}
          </button>
        </div>

        <div>
          <div className="text-3xl font-bold mb-2">{scoreboard.scoreB}</div>
          <button
            onClick={() => updateScore(0, 1)}
            className="bg-green-500 text-white px-4 py-2 rounded mb-2"
          >
            +1 {scoreboard.teamB}
          </button>
          <br />
          <button
            onClick={() => updateScore(0, -1)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            -1 {scoreboard.teamB}
          </button>
        </div>
      </div>

      <button
        onClick={() => router.push('/')}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
      >
        ← Back to Home
      </button>
    </div>
  )
}