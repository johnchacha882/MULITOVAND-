'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function AuthNav() {
  const [u, setU] = useState<boolean | null>(null);
  useEffect(() => { fetch('/api/auth/me').then((r) => setU(r.ok)).catch(() => setU(false)); }, []);
  if (u === null) return null;
  if (!u) return <><Link href="/login">Ingia</Link><Link href="/register">Jisajili</Link></>;
  return <button onClick={async () => { await fetch('/api/auth/logout', { method: 'POST' }); location.href = '/'; }}>Toka</button>;
}
