"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-[#F4EEFC] px-6 md:px-12 py-6 flex items-center justify-between">
      
      <div className="font-semibold text-xl">
        Dott. Davide Stella
      </div>

      <nav className="hidden md:flex space-x-6">
        <a href="#chi-sono">Chi sono</a>
        <a href="#servizi">Servizi</a>
        <a href="#contatti">Contatti</a>
      </nav>

      <button
        className="md:hidden"
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