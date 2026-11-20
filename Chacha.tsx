"use client";
import { useState } from "react";
export default function Chacha() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ r: "bot", t: "Habari! Mimi ni Chacha, msaidizi wako 24/7." }]);
  const [v, setV] = useState("");
  async function send() {
    if (!v.trim()) return;
    const q = v; setV(""); setMsgs((m) => [...m, { r: "me", t: q }]);
    const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: q }) });
    const d = await res.json(); setMsgs((m) => [...m, { r: "bot", t: d.reply ?? d.error ?? "Hitilafu, jaribu tena." }]);
  }
  return (
    <div className="fixed bottom-4 right-4 z-20">
      {open && (
        <div className="mb-2 flex h-80 w-72 flex-col rounded-xl border bg-white shadow-xl">
          <div className="flex-1 space-y-2 overflow-y-auto p-3 text-sm">
            {msgs.map((m, i) => <p key={i} className={m.r === "me" ? "text-right text-blue-700" : "text-slate-700"}>{m.t}</p>)}
          </div>
          <div className="flex border-t"><input value={v} onChange={(e) => setV(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} className="flex-1 p-2 text-sm outline-none" placeholder="Uliza Chacha..." /><button onClick={send} className="bg-green-600 px-3 text-white">Tuma</button></div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="rounded-full bg-green-600 px-5 py-3 font-bold text-white shadow-lg">Chacha 💬</button>
    </div>
  );
}
