import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SLUG_REDIRECTS } from "@/lib/seo/slug-redirects";

const PRIMARY_HOST = "persecutionexpert.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  if (host === `www.${PRIMARY_HOST}`) {
    const url = request.nextUrl.clone();
    url.hostname = PRIMARY_HOST;
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  const pathname = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  const redirectPath = SLUG_REDIRECTS[pathname];
  if (redirectPath) {
    const url = new URL(redirectPath + request.nextUrl.search, request.url);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
