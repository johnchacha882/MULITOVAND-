"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import type { Kozi } from "@/data/kozi";
import Chacha from "./Chacha";
export default function CourseView({ kozi }: { kozi: Kozi }) {
  const key = `progress:${kozi.slug}`;
  const [i, setI] = useState(0);
  const [done, setDone] = useState<number[]>([]);
  useEffect(() => {
    try { const s = JSON.parse(localStorage.getItem(key) || "null"); if (s) { setDone(s.done); setI(s.i); } } catch {}
  }, [key]);
  function save(n: number, d: number[]) { setI(n); setDone(d); try { localStorage.setItem(key, JSON.stringify({ i: n, done: d })); } catch {} }
  function next() { const d = Array.from(new Set([...done, i])); save(Math.min(i + 1, kozi.lessons.length - 1), d); }
  const l = kozi.lessons[i];
  const pct = Math.round((done.length / kozi.lessons.length) * 100);
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Link href="/#kozi" className="text-sm text-blue-600">← Kozi zote</Link>
      <h1 className="mt-2 text-3xl font-bold text-blue-800">{kozi.title} <span className="rounded bg-green-100 px-2 text-sm text-green-700">BURE</span></h1>
      <p className="mt-2 text-slate-600">{kozi.long}</p>
      <div className="my-4 h-3 rounded bg-slate-200"><div className="h-3 rounded bg-green-500" style={{ width: `${pct}%` }} /></div>
      <p className="mb-4 text-sm">Maendeleo: {pct}%</p>
      <div className="grid gap-6 md:grid-cols-[250px_1fr]">
        <ol className="space-y-1">
          {kozi.lessons.map((x, n) => (
            <li key={n}><button onClick={() => save(n, done)} className={`w-full rounded p-2 text-left text-sm ${n === i ? "bg-blue-600 text-white" : "bg-slate-100"}`}>{done.includes(n) ? "✓ " : ""}{n + 1}. {x.title}</button></li>
          ))}
        </ol>
        <article className="rounded-xl border p-6">
          <h2 className="mb-3 text-xl font-semibold">{l.title}</h2>
          <p className="mb-4 whitespace-pre-line">{l.body}</p>
          <pre className="overflow-x-auto rounded bg-slate-900 p-4 text-sm text-green-300"><code>{l.code}</code></pre>
          <p className="mt-4 rounded bg-blue-50 p-3 text-sm"><b>Zoezi:</b> {l.task}</p>
          <div className="mt-6 flex justify-between">
            <button disabled={i === 0} onClick={() => save(i - 1, done)} className="rounded border px-4 py-2 disabled:opacity-40">Rudi</button>
            <button onClick={next} className="rounded bg-green-600 px-4 py-2 text-white">{i === kozi.lessons.length - 1 ? "Maliza Kozi" : "Somo Linalofuata"}</button>
          </div>
        </article>
      </div>
      <Chacha />
    </main>
  );
}
