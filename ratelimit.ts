import { Ratelimit } from '@upstash/ratelimit';
import { redis } from './store';
const cache = new Map<string, Ratelimit>();
const mem = new Map<string, { c: number; t: number }>();
export async function limit(name: string, key: string, max: number, windowSec: number): Promise<boolean> {
  if (redis) {
    let rl = cache.get(name);
    if (!rl) { rl = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(max, `${windowSec} s`), prefix: `rl:${name}` }); cache.set(name, rl); }
    return (await rl.limit(key)).success;
  }
  const now = Date.now(), k = name + key, e = mem.get(k);
  if (!e || now > e.t) { mem.set(k, { c: 1, t: now + windowSec * 1000 }); return true; }
  return ++e.c <= max;
}
