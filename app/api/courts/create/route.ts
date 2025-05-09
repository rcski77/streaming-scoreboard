// ----------
// app/api/courts/create/route.ts (POST create new court and default scoreboard)
// ----------

import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  // Create the court
  const court = await prisma.court.create({ data: { name: body.name } })

  // Create a default scoreboard entry
  await prisma.scoreboard.create({
    data: {
      courtId: court.id,
      teamA: 'Team A',
      teamB: 'Team B',
      scoreA: 0,
      scoreB: 0,
      gamesA: 0,
      gamesB: 0,
    }
  })

  return NextResponse.json(court)
}
