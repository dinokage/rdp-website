import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "maintenance" }, { status: 200 });
}

// operational downtime degraded maintenance