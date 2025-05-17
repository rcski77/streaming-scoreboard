// ----------
// app/auth/signin/page.tsx
// ----------

"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("email", { email, callbackUrl: "/admin" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Sign in to Scoreboard Admin</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-2 text-black rounded bg-white"
      />
      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-blue-700 text-black py-2 rounded"
      >
        Send Magic Link
      </button>
      </form>
      <button
      onClick={() => router.push("/")}
      className="w-full max-w-sm bg-blue-600 text-white px-4 py-2 rounded m-4"
      >
      ← Back to Home
      </button>
    </div>
  );
}
