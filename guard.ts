import { NextResponse } from 'next/server';
import type { z } from 'zod';
import { limit } from './ratelimit';
import { currentUser } from './auth';
export const fail = (error: string, status: number, headers?: Record<string, string>) => NextResponse.json({ error }, { status, headers });
export function ip(req: Request) { return (req.headers.get('x-forwarded-for') ?? 'local').split(',')[0].trim(); }
export async function rateLimit(req: Request, name: string, max: number, win: number, extra = '') {
  return (await limit(name, ip(req) + extra, max, win)) ? null : fail('Maombi mengi mno, subiri kidogo', 429, { 'Retry-After': String(win) });
}
// Rate limit + ulazima wa kuwa ameingia
export async function guard(req: Request, name: string, max: number, win: number) {
  const r = await rateLimit(req, name, max, win); if (r) return { res: r };
  const user = await currentUser();
  return user ? { user } : { res: fail('Ingia kwanza', 401) };
}
export async function parse<T extends z.ZodTypeAny>(req: Request, schema: T): Promise<{ data: z.infer<T> } | { res: NextResponse }> {
  if (!req.headers.get('content-type')?.includes('application/json')) return { res: fail('Content-Type lazima iwe JSON', 415) };
  const body = await req.json().catch(() => null);
  const r = schema.safeParse(body);
  return r.success ? { data: r.data } : { res: fail(r.error.issues[0]?.message ?? 'Data si sahihi', 400) };
}
