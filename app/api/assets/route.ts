import { NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL;

export async function GET() {
  if (!API_BASE_URL) {
    return NextResponse.json(
      { error: "API_BASE_URL is not defined" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch currency data" },
      { status: 500 }
    );
  }
}
