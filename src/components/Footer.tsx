"use client";

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t text-center text-gray-500">
      <p className="footer">
        © {new Date().getFullYear()} Dott. Davide Stella — Psicologo Clinico
      </p>

      <div className="mt-4 flex flex-row items-center justify-center gap-2">
        <a href="/privacy-policy" className="footer underline">
          Privacy Policy
        </a>

        <a href="/cookie-policy" className="footer underline">
          Cookie Policy
        </a>
      </div>
    </footer>
  );
}