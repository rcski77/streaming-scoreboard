import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const updated = await prisma.scoreboard.upsert({
    where: {
      id: body.id,
    },
    update: {
      teamA: body.teamA,
      teamB: body.teamB,
      scoreA: body.scoreA,
      scoreB: body.scoreB,
      gamesA: body.gamesA,
      gamesB: body.gamesB,
    },
    create: {
      teamA: body.teamA,
      teamB: body.teamB,
      scoreA: body.scoreA,
      scoreB: body.scoreB,
      gamesA: body.gamesA,
      gamesB: body.gamesB,
      court: {
        connect: {
          id: body.courtId, // Ensure `body.courtId` is provided in the request body
        },
      },
    }
  })
  return NextResponse.json(updated)
}