import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  await prisma.scoreboard.deleteMany({ where: { courtId: body.courtId } })
  const result = await prisma.court.delete({ where: { id: body.courtId } })
  return NextResponse.json(result)
}