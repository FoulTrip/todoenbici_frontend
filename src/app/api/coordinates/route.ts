import { NextResponse } from "next/server";
import JsonLocation from "@/components/jsons/locations_bici.json";

export async function GET() {
  try {
    return NextResponse.json(JsonLocation);
  } catch (error) {
    return NextResponse.json("error when obtaining data");
  }
}
