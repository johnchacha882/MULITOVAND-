import { Redis } from '@upstash/redis';
export type User = { id: string; email: string; name: string; hash: string };
const url = process.env.UPSTASH_REDIS_REST_URL, token = process.env.UPSTASH_REDIS_REST_TOKEN;
export const redis = url && token ? new Redis({ url, token }) : null;
const mem = new Map<string, User>();
function check() { if (!redis && process.env.NODE_ENV === 'production') throw new Error('UPSTASH_REDIS_REST_URL/TOKEN zinahitajika'); }
export async function findUser(email: string): Promise<User | null> {
  check(); return redis ? await redis.get<User>(`user:${email}`) : mem.get(email) ?? null;
}
export async function createUser(u: User): Promise<boolean> {
  check();
  if (redis) return (await redis.set(`user:${u.email}`, u, { nx: true })) === 'OK';
  if (mem.has(u.email)) return false; mem.set(u.email, u); return true;
}
