"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        nome: formData.get("nome"),
        cognome: formData.get("cognome"),
        email: formData.get("email"),
        messaggio: formData.get("messaggio"),
      }),
    });

    setLoading(false);

    if (response.ok) {
      alert("Messaggio inviato!");
      form.reset();
    } else {
      alert("Errore durante l'invio.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Nome + Cognome */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          name="nome"
          placeholder="Nome"
          required
          className="w-full border p-3 rounded-sm"
        />

        <input
          name="cognome"
          placeholder="Cognome"
          required
          className="w-full border p-3 rounded-sm"
        />

      </div>

      {/* Email */}
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full border p-3 rounded-sm"
      />

      {/* Messaggio */}
      <textarea
        name="messaggio"
        placeholder="Messaggio"
        required
        rows={6}
        className="w-full border p-3 rounded-sm"
      />

      {/* Bottone allineato a destra */}
      <div className="flex justify-end">

        <button
          type="submit"
          disabled={loading}
          className="
            inline-block
            border border-carbon-black
            px-6 py-3
            rounded-sm
            transition-all
            duration-600
            ease-in-out
            hover:bg-carbon-black
            hover:text-lavender-mist
            active:scale-95
          "
        >
          {loading ? "Invio..." : "Invia"}
        </button>

      </div>

    </form>
  );
}