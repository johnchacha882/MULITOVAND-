import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { randomUUID } from 'crypto';
import { registerSchema } from '@/lib/schemas';
import { parse, rateLimit, fail } from '@/lib/guard';
import { createUser } from '@/lib/store';
import { createSession } from '@/lib/auth';
export async function POST(req: Request) {
  const l = await rateLimit(req, 'register', 5, 3600); if (l) return l;
  const p = await parse(req, registerSchema); if ('res' in p) return p.res;
  const { name, email, password } = p.data;
  const user = { id: randomUUID(), email, name, hash: await bcrypt.hash(password, 12) };
  if (!(await createUser(user))) return fail('Barua pepe hii tayari imesajiliwa', 409);
  await createSession(user);
  return NextResponse.json({ ok: true, user: { name, email } }, { status: 201 });
}
