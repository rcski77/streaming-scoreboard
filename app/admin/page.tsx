// ----------
// app/admin/page.tsx (Admin page with games display and home button)
// ----------

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const router = useRouter()
  const [courtId, setCourtId] = useState(1)
  const [teamA, setTeamA] = useState('Team A')
  const [teamB, setTeamB] = useState('Team B')
  const [scoreA, setScoreA] = useState(0)
  const [scoreB, setScoreB] = useState(0)
  const [gamesA, setGamesA] = useState(0)
  const [gamesB, setGamesB] = useState(0)
  const [newCourtName, setNewCourtName] = useState('')
  const [renameCourtName, setRenameCourtName] = useState('')
  const [message, setMessage] = useState('')
  const [courts, setCourts] = useState<{ id: number, name: string }[]>([])

  const fetchCourts = () => {
    fetch('/api/courts')
      .then(res => res.json())
      .then(data => {
        setCourts(data)
        if (data.length > 0) setCourtId(data[0].id)
      })
  }

  const fetchScoreboard = (id: number) => {
    fetch(`/api/scoreboard/by-court/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setTeamA(data.teamA)
          setTeamB(data.teamB)
          setScoreA(data.scoreA)
          setScoreB(data.scoreB)
          setGamesA(data.gamesA || 0)
          setGamesB(data.gamesB || 0)
        }
      })
  }

  useEffect(() => {
    fetchCourts()
  }, [])

  useEffect(() => {
    if (courtId) fetchScoreboard(courtId)
  }, [courtId])

  const updateScore = async () => {
    const res = await fetch('/api/scoreboard/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ courtId, teamA, teamB, scoreA, scoreB, gamesA, gamesB })
    })
    if (res.ok) setMessage('Score updated successfully')
    else setMessage('Failed to update score')
  }

  const createCourt = async () => {
    const res = await fetch('/api/courts/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newCourtName })
    })
    if (res.ok) {
      setNewCourtName('')
      fetchCourts()
      setMessage('Court created')
    } else setMessage('Failed to create court')
  }

  const renameCourt = async () => {
    const res = await fetch('/api/courts/rename', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ courtId, newName: renameCourtName })
    })
    if (res.ok) {
      setRenameCourtName('')
      fetchCourts()
      setMessage('Court renamed')
    } else setMessage('Failed to rename court')
  }

  const deleteCourt = async () => {
    const res = await fetch('/api/courts/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ courtId })
    })
    if (res.ok) {
      fetchCourts()
      setMessage('Court deleted')
    } else setMessage('Failed to delete court')
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Score Update</h1>
      <div className="mb-4">
        <button
          onClick={() => router.push('/')}
          className="bg-blue-700 text-white px-4 py-2 rounded"
        >
          ← Back to Home
        </button>
      </div>

      <label>Court:</label>
      <select
        value={courtId}
        onChange={e => setCourtId(+e.target.value)}
        className="border p-1 mb-2 w-full bg-gray-500 text-white"
      >
        {courts.map(court => (
          <option key={court.id} value={court.id}>{court.name}</option>
        ))}
      </select>

      <label>Team A:</label>
      <input value={teamA} onChange={e => setTeamA(e.target.value)} className="border p-1 mb-2 w-full" />
      <label>Score A:</label>
      <input type="number" value={scoreA} onChange={e => setScoreA(+e.target.value)} className="border p-1 mb-2 w-full" />
      <label>Games A (Won):</label>
      <input type="number" value={gamesA} onChange={e => setGamesA(+e.target.value)} className="border p-1 mb-2 w-full" />

      <label>Team B:</label>
      <input value={teamB} onChange={e => setTeamB(e.target.value)} className="border p-1 mb-2 w-full" />
      <label>Score B:</label>
      <input type="number" value={scoreB} onChange={e => setScoreB(+e.target.value)} className="border p-1 mb-2 w-full" />
      <label>Games B (Won):</label>
      <input type="number" value={gamesB} onChange={e => setGamesB(+e.target.value)} className="border p-1 mb-2 w-full" />

      <button onClick={updateScore} className="bg-blue-500 text-white px-4 py-2 rounded">Update Score</button>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Create New Court</h2>
        <input value={newCourtName} onChange={e => setNewCourtName(e.target.value)} className="border p-1 mb-2 w-full" />
        <button onClick={createCourt} className="bg-green-500 text-white px-4 py-2 rounded">Add Court</button>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Rename Selected Court</h2>
        <input value={renameCourtName} onChange={e => setRenameCourtName(e.target.value)} className="border p-1 mb-2 w-full" />
        <button onClick={renameCourt} className="bg-yellow-500 text-white px-4 py-2 rounded">Rename Court</button>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Delete Selected Court</h2>
        <button onClick={deleteCourt} className="bg-red-500 text-white px-4 py-2 rounded">Delete Court</button>
      </div>

      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  )
}
