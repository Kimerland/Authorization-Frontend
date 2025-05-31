"use server";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/profile"];

const middlewareFn = (req: NextRequest) => {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/register", req.url));
  }
};

export default middlewareFn;
