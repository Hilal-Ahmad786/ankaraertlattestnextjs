import { cookies } from "next/headers";
import { ADMIN_COOKIE, sessionToken, verifyPassword } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let password = "";
  try {
    const body = await req.json();
    password = typeof body?.password === "string" ? body.password : "";
  } catch {
    password = "";
  }

  if (!verifyPassword(password)) {
    return Response.json({ ok: false }, { status: 401 });
  }

  cookies().set(ADMIN_COOKIE, sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return Response.json({ ok: true });
}

export async function DELETE() {
  cookies().delete(ADMIN_COOKIE);
  return Response.json({ ok: true });
}
