import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
export const COOKIE = 'mt_session';
const secret = () => {
  const s = process.env.JWT_SECRET;
  if (!s || s.length < 32) throw new Error('JWT_SECRET (herufi 32+) inahitajika');
  return new TextEncoder().encode(s);
};
const opts = { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax' as const, path: '/' };
export async function createSession(u: { id: string; email: string }) {
  const t = await new SignJWT({ email: u.email }).setProtectedHeader({ alg: 'HS256' }).setSubject(u.id).setIssuedAt().setExpirationTime('7d').sign(secret());
  cookies().set(COOKIE, t, { ...opts, maxAge: 604800 });
}
export function destroySession() { cookies().set(COOKIE, '', { ...opts, maxAge: 0 }); }
export async function currentUser() {
  const t = cookies().get(COOKIE)?.value;
  if (!t) return null;
  try {
    const { payload } = await jwtVerify(t, secret(), { algorithms: ['HS256'] });
    return { id: payload.sub as string, email: payload.email as string };
  } catch { return null; }
}
