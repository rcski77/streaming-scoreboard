import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  const courts = await prisma.court.findMany()
  return NextResponse.json(courts)
}
