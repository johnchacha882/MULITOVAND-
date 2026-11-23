
"use client";
import { useState } from "react";

export default function AuthForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log(result);
      alert("Imefanikiwa!");
    } catch (error) {
      console.error(error);
      alert("Imeshindikana");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="email" type="email" placeholder="Email" required className="w-full p-2 border rounded" />
      <input name="password" type="password" placeholder="Password" required className="w-full p-2 border rounded" />
      <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-2 rounded">
        {loading ? "Inatuma..." : "Ingia"}
      </button>
    </form>
  );
}
