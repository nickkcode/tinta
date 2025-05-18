import generatePalette from "@/lib/generatePalette";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userPrompt } = await req.json();

    if (!userPrompt) {
      return NextResponse.json({ error: "Missing Prompt" }, { status: 400 });
    }

    const result = await generatePalette(userPrompt);

    return NextResponse.json({ result });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
