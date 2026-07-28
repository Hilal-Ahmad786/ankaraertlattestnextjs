import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "admin_clicks";

function expectedToken() {
  const pw = process.env.ADMIN_CLICKS_PASSWORD || "";
  const secret = process.env.CLICK_PEPPER || "click-pepper";
  return createHmac("sha256", secret).update("admin:" + pw).digest("hex");
}

export function verifyPassword(input: string) {
  const pw = process.env.ADMIN_CLICKS_PASSWORD || "";
  if (!pw) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(pw);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function sessionToken() {
  return expectedToken();
}

export function isAdminAuthed() {
  return cookies().get(ADMIN_COOKIE)?.value === expectedToken();
}
