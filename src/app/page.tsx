export const metadata = {
  title: "Psicologo a Mascali | Dott. Nome Cognome",
  description:
    "Supporto psicologico a Mascali per ansia, stress e difficoltà personali. Colloqui in presenza e online.",
}

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 space-y-24">
      {/* NAV */}
      <header className="flex justify-between items-center py-6 mb-16">
        <div className="font-semibold">Dott. Nome Cognome</div>

        <nav className="space-x-6 text-sm text-gray-600">
          <a href="#chi-sono" className="hover:text-gray-900">
            Chi sono
          </a>
          <a href="#servizi" className="hover:text-gray-900">
            Servizi
          </a>
          <a href="#contatti" className="hover:text-gray-900">
            Contatti
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="mb-24">
        <h1 className="text-5xl font-semibold tracking-tight mb-4">
          Psicologo a Mascali
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Offro supporto psicologico per ansia, stress e difficoltà personali.
          Lavoro con un approccio basato sull’ascolto e su strategie concrete di
          benessere.
        </p>

        <a
          href="#contatti"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition"
        >
          Prenota un colloquio
        </a>
      </section>

      {/* CHI SONO */}
      <section id="chi-sono" className="mb-24">
        <h2 className="text-2xl font-semibold mb-4">Chi sono</h2>

        <p className="text-gray-700 leading-relaxed">
          Breve bio professionale. Qui il tuo amico dovrebbe spiegare
          formazione, approccio terapeutico e filosofia di lavoro in modo
          semplice e umano.
        </p>
      </section>

      {/* SERVIZI */}
      <section id="servizi" className="mb-24">
        <h2 className="text-2xl font-semibold mb-6">Servizi</h2>

        <ul className="space-y-3 text-gray-700">
          <li>• Supporto per ansia e stress</li>
          <li>• Colloqui individuali</li>
          <li>• Supporto nei momenti di crisi</li>
          <li>• Colloqui online e in presenza</li>
        </ul>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Contatti</h2>
        <a
          href="https://wa.me/39XXXXXXXXXX"
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg text-sm hover:bg-green-600 transition"
        >
          WhatsApp
        </a>      
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>Email:</strong> nome@email.com
          </p>
          <p>
            <strong>Telefono:</strong> +39 XXX XXX XXXX
          </p>
          <p>
            <strong>Studio:</strong> Mascali, Italia
          </p>
        </div>

        <a
          href="mailto:nome@email.com"
          className="inline-block mt-6 bg-gray-900 text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition"
        >
          Scrivimi una email
        </a>
        <iframe
          className="w-full h-64 rounded-xl mt-6"
          src="https://maps.app.goo.gl/ByHTMXHq2Cx3VhQe6"
          loading="lazy"
        />
      </section>

      {/* FOOTER */}
      <footer className="text-sm text-gray-500 border-t pt-6">
        © {new Date().getFullYear()} Dott. Nome Cognome — Psicologo
      </footer>
    </main>
  );
}