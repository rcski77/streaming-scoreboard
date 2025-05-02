import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { courtId: string } }
) {
  const courtId = parseInt(params.courtId)
  const scoreboard = await prisma.scoreboard.findFirst({
    where: { courtId },
    orderBy: { updatedAt: 'desc' }
  })

  return NextResponse.json(scoreboard)
}
