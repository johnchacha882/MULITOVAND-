'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function AuthForm({ mode }: { mode: 'login' | 'register' }) {
  const r = useRouter();
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setBusy(true); setErr('');
    const f = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const res = await fetch(`/api/auth/${mode}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
    const d = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) return setErr(d.error ?? 'Hitilafu, jaribu tena');
    r.push('/'); r.refresh();
  }
  const inp = 'w-full rounded border p-2';
  return (
    <main className="mx-auto max-w-sm px-4 py-12">
      <h1 className="mb-6 text-2xl font-bold text-blue-800">{mode === 'login' ? 'Ingia' : 'Jisajili'}</h1>
      <form onSubmit={submit} className="space-y-3">
        {mode === 'register' && <input name="name" required minLength={2} maxLength={60} placeholder="Jina" className={inp} autoComplete="name" />}
        <input name="email" type="email" required maxLength={254} placeholder="Barua pepe" className={inp} autoComplete="email" />
        <input name="password" type="password" required maxLength={72} minLength={mode === 'register' ? 10 : 1} placeholder="Password" className={inp} autoComplete={mode === 'login' ? 'current-password' : 'new-password'} />
        {mode === 'register' && <p className="text-xs text-slate-500">Angalau herufi 10: kubwa, ndogo na namba.</p>}
        {err && <p role="alert" className="text-sm text-red-600">{err}</p>}
        <button disabled={busy} className="w-full rounded bg-blue-600 py-2 text-white disabled:opacity-50">{mode === 'login' ? 'Ingia' : 'Fungua Akaunti'}</button>
      </form>
      <p className="mt-4 text-sm">{mode === 'login' ? <>Huna akaunti? <Link href="/register" className="text-blue-600">Jisajili</Link></> : <>Una akaunti? <Link href="/login" className="text-blue-600">Ingia</Link></>}</p>
    </main>
  );
}
