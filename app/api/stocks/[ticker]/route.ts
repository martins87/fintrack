import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ ticker: string }> }
) {
  const { ticker } = await params;

  if (!API_BASE_URL) {
    return NextResponse.json(
      { error: "API_BASE_URL is not defined" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}/historical/stocks?key=${API_KEY}&days_ago=7&symbols=${ticker}&fields=only_results`
    );
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch currency data" },
      { status: 500 }
    );
  }
}
