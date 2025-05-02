// app/api/scoreboard/[courtId]/route.ts

import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

// ✅ Future-proofed: destructure `params` in function argument
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ courtId: string }> }
) {
  // 👇 Use React.use() once enforced; now we await manually
  const { courtId } = await context.params

  const parsedCourtId = parseInt(courtId)

  const scoreboard = await prisma.scoreboard.findFirst({
    where: { courtId: parsedCourtId },
    orderBy: { updatedAt: 'desc' },
  })

  return NextResponse.json(scoreboard)
}
