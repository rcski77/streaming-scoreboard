import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const court = await prisma.court.update({
    where: { id: body.courtId },
    data: { name: body.newName }
  })
  return NextResponse.json(court)
}