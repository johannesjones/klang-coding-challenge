import { NextResponse } from "next/server";

export async function GET() {
    const randomString = Math.random().toString(36).substring(7);
    const response = NextResponse.json({ randomString });
    response.headers.set("Cache-Control", "no-store");
    return response;
}
