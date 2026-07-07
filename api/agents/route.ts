import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "Momentum AI",
      risk: "Medium",
      winRate: "71%"
    },
    {
      id: 2,
      name: "Scalper AI",
      risk: "High",
      winRate: "65%"
    }
  ]);
}
