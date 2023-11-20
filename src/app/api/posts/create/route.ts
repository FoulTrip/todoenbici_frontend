import { NextResponse } from "next/server";
import { connectBD } from "@/libs/mongodb";

export async function POST(request: Request) {
    try {
        await connectBD()

        const { autor, title, visual, } = await request.json()
    } catch (error) {

    }
}