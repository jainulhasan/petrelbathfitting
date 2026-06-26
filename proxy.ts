import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") return NextResponse.next();

  const forwardedProto = request.headers.get("x-forwarded-proto");
  const isHttps = request.nextUrl.protocol === "https:" || forwardedProto === "https";

  if (isHttps) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|assets).*)"]
};
