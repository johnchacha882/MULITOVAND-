import { kozi } from "@/data/kozi";
export function jibu(q: string): string {
  const t = q.toLowerCase();
  const f = kozi.find((k) => t.includes(k.slug) || t.includes(k.title.toLowerCase()));
  if (f) return `Kozi ya ${f.title} ni BURE. ${f.description} Fungua: /kozi/${f.slug}`;
  if (/bei|lipa|malipo|price|free|bure/.test(t)) return "Kozi zote 72 ni BURE kabisa kwa sasa - ofa maalum.";
  if (/simu|wasiliana|contact|phone|miadi|appointment/.test(t)) return "Piga +255622794234, Jumapili-Jumamosi 9:00 AM - 6:00 PM (Dar es Salaam). Miadi ya simu ni dakika 30.";
  if (/lugha|language/.test(t)) return "Kozi zinafundishwa kwa Kiswahili, Kiingereza, Kifaransa, Kihispania, Kiarabu na Kichina.";
  return `Karibu! Nina kozi ${kozi.length} bure. Niulize kuhusu kozi (mf. Python, React), lugha, au mawasiliano.`;
}
