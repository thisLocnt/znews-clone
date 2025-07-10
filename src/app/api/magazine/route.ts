import { magazine } from "@/data/dummy-data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(magazine);
}
