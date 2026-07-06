import { NextResponse } from "next/server";

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_URL || "https://my.flockdesk.com/desk/public/";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const targetUrl = new URL("enquiry/submit", apiBaseUrl).toString();

    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: text || "Failed to submit enquiry",
        },
        { status: response.status },
      );
    }

    return NextResponse.json(text ? JSON.parse(text) : { success: true }, {
      status: 200,
    });
  } catch (error) {
    console.error("Enquiry submission failed", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit enquiry right now.",
      },
      { status: 500 },
    );
  }
}
