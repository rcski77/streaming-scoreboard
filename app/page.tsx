// ----------
// app/page.tsx (Home page with eye icon for display view)
// ----------

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye } from 'lucide-react'

export default function HomePage() {
  const [courts, setCourts] = useState<{ id: number; name: string }[]>([])
  const router = useRouter()

  useEffect(() => {
    fetch('/api/courts')
      .then(res => res.json())
      .then(data => setCourts(data))
  }, [])

  return (
    <div className="p-4 max-w-xl mx-auto text-center">
      <div className="absolute top-4 right-6">
        <button
          className="bg-yellow-500 text-black px-4 py-2 rounded"
          onClick={() => router.push('/admin')}
        >
          Admin Login
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-6">Select a Court</h1>
      {courts.length === 0 ? (
        <p>No courts available. Please add courts in the admin panel.</p>
      ) : (
        <ul className="space-y-4">
          {courts.map(court => (
            <li key={court.id} className="flex items-center justify-between gap-2">
              <button
                className="flex-1 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => router.push(`/scoreboard/${court.id}`)}
              >
                {court.name}
              </button>
              <button
                className="bg-gray-700 text-white px-3 py-2 rounded flex items-center justify-center"
                onClick={() => router.push(`/scoreboard/${court.id}/display`)}
                aria-label={`View display for ${court.name}`}
              >
                <Eye className="w-6 h-6" />
              </button>
            </li>
          ))}
          <li className="flex items-center justify-between gap-2">
            <button
              className="flex-1 bg-red-600 text-white px-4 py-2 rounded"
              onClick={() => router.push('/scoreboard/all')}
            >
              View All Scoreboards
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}