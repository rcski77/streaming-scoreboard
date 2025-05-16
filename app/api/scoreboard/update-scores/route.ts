// app/api/scoreboard/update-scores/route.ts

import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  if (!body.id) {
    return NextResponse.json({ error: 'Missing scoreboard id' }, { status: 400 })
  }

  const updated = await prisma.scoreboard.update({
    where: { id: body.id },
    data: {
      scoreA: body.scoreA,
      scoreB: body.scoreB,
      gamesA: body.gamesA,
      gamesB: body.gamesB,
    },
  })

  return NextResponse.json(updated)
}
