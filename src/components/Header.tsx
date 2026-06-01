"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-6 md:px-12 py-6 flex items-center justify-between">
      
      <div className="font-semibold">
        Dott. Nome Cognome
      </div>

      <nav className="hidden md:flex space-x-6 text-sm text-gray-600">
        <a href="#chi-sono">Chi sono</a>
        <a href="#servizi">Servizi</a>
        <a href="#contatti">Contatti</a>
      </nav>

      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (
        <div className="absolute top-20 right-6 bg-white shadow-lg p-4 rounded-xl flex flex-col space-y-3 md:hidden">
          <a href="#chi-sono" onClick={() => setOpen(false)}>Chi sono</a>
          <a href="#servizi" onClick={() => setOpen(false)}>Servizi</a>
          <a href="#contatti" onClick={() => setOpen(false)}>Contatti</a>
        </div>
      )}

    </header>
  );
}