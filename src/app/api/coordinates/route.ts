import { NextResponse } from "next/server"

interface cordenates {
    longitude: number,
    latitude: number
}

export async function POST(request: Request) {
    const {longitude, latitude}: cordenates = await request.json()
    const log = longitude
    const lat = latitude
    return NextResponse.json(`Longitud: ${log}, Latitud: ${lat}`)
}