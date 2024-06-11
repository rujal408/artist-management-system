import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getToken } from "./utils/token";

export default async function (request: NextRequest) {
  const token = await getToken();
  const pathname = request.nextUrl.pathname;
  if (token) {
    if (pathname === "/" || pathname === "/register-user") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  } else {
    if (pathname === "/dashboard") {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/register-user", "/dashboard"],
};
