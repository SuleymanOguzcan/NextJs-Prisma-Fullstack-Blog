import prisma from "@/database"; // Adjust the path based on your project structure
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const extractPostData = await request.json();
    const newlyCreatedPost = await prisma.post.create({
      data: extractPostData,
    });

    console.log(extractPostData, "extractPostData");

    if (newlyCreatedPost) {
      return NextResponse.json({
        success: true,
        message: "New blog post added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong! Please try again",
      });
    }
  } catch (e) {
    console.error(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
