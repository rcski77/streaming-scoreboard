'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const [courts, setCourts] = useState<{ id: number; name: string }[]>([])
  const router = useRouter()

  useEffect(() => {
    fetch('/api/courts')
      .then(res => res.json())
      .then(data => setCourts(data))
  }, [])

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Select a Court</h1>
      {courts.length === 0 ? (
        <p>No courts available. Please add courts in the admin panel.</p>
      ) : (
        <ul className="space-y-4">
          {courts.map(court => (
            <li key={court.id}>
              <button
                className="w-full bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => router.push(`/scoreboard/${court.id}`)}
              >
                {court.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}