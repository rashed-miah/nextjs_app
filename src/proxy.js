import { NextResponse } from "next/server";

export function proxy(request) {
  const isServicesPage = request.nextUrl.pathname.startsWith("/services");
  const dummyData = {
    role: "admin",
    email: "developer.rashedmiah@gmail.com",
  };

  const isAdmin = dummyData.role == "admin";

  if (isServicesPage && !isAdmin) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
