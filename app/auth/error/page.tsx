'use client'

import { useRouter } from 'next/navigation'

export default function SignInError() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="bg-white p-8 rounded shadow max-w-sm w-full flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
        <p className="mb-4 text-gray-700">
          Your email is not authorized to access the admin panel.
        </p>
        <button
          onClick={() => router.push('/')}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  )
}
