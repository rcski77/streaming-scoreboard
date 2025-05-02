import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const updated = await prisma.scoreboard.create({
    data: {
      courtId: body.courtId,
      teamA: body.teamA,
      teamB: body.teamB,
      scoreA: body.scoreA,
      scoreB: body.scoreB
    }
  })
  return NextResponse.json(updated)
}