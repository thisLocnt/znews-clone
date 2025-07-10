import { businessNews } from "@/data/dummy-data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(businessNews);
}
