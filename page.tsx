import { notFound } from "next/navigation";
import { kozi } from "@/data/kozi";
import CourseView from "@/components/CourseView";
export function generateStaticParams() { return kozi.map((k) => ({ slug: k.slug })); }
export default function Page({ params }: { params: { slug: string } }) {
  const k = kozi.find((x) => x.slug === params.slug);
  if (!k) notFound();
  return <CourseView kozi={k} />;
}
