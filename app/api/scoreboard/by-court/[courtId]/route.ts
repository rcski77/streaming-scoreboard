import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ courtId: string }> }
) {
  const { courtId } = await params;
  const parsedCourtId = parseInt(courtId);
  const scoreboard = await prisma.scoreboard.findFirst({
    where: { courtId: parsedCourtId },
    orderBy: { updatedAt: "desc" },
  });

  return NextResponse.json(scoreboard);
}
