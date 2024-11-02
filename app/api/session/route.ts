import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const POST = auth(function POST(req) {
  if (req.auth) return NextResponse.json(req.auth);
  return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
});
