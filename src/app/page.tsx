import Header from "@/components/Header";
  
export const metadata = {
  title: "Psicologo a Mascali | Dott. Nome Cognome",
  description:
    "Supporto psicologico a Mascali per ansia, stress e difficoltà personali. Colloqui in presenza e online.",
}

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen px-6 md:px-12">

        {/* IMMAGINE */}
        <div className="flex  justify-center mb-10 md:mb-0 md:pr-24 md:max-h-[50vh] md:max-w-[38vh]">
          <img
            src="/Montagna.jpg"
            alt="Studio psicologo"
            className="rounded-t-full rounded-b-none w-full max-w-sm md:max-w-md object-cover"
          />
        </div>

        {/* TESTO */}
        <div className="max-w-4xl md:pl-24 flex flex-col items-center md:items-start">

          <h1 className="text-4xl md:text-7xl font-semibold tracking-tight mb-6">
            Psicologo a Palermo
          </h1>

          <p className="leading-relaxed mb-8 max-w-2xl">
            Supporto psicologico per ansia, stress e difficoltà personali.
            Uno spazio di ascolto e lavoro concreto sul benessere psicologico.
          </p>

          <a
            href="#contatti"
            className="
              inline-block
              border border-[#101911]
              px-6 py-3
              rounded-sm
              transition-all
              duration-600
              ease-in-out
              hover:bg-[#101911]
              hover:text-[#F4EEFC]
              active:scale-95
            "
          >
            Prenota un colloquio
          </a>

        </div>

      </section>

      {/* CHI SONO */}
      <section className="flex flex-col md:flex-row bg-[#A4C2A8]">

        {/* TESTO → deve stare sotto su mobile */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 py-12 order-2 md:order-1">

          <div className="max-w-lg text-center md:text-left">

            <h2 className="text-3xl md:text-6xl font-semibold mb-6">
              Chi sono
            </h2>

            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

          </div>

        </div>

        {/* IMMAGINE → deve stare sopra su mobile */}
        <div className="w-full md:w-1/2 order-1 md:order-2">

          <img
            src="/Colline.jpg"
            alt="Studio"
            className="w-full h-64 md:h-full object-cover"
          />

        </div>

      </section>

      {/* SERVIZI */}
      <section className="flex flex-col md:flex-row">

        {/* IMMAGINE */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 order-1 md:order-1">

          <img
            src="/Colline.jpg"
            alt="Approccio terapeutico"
            className="w-full max-w-sm md:max-w-md rounded-2xl object-cover"
          />

        </div>

        {/* TESTO */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 py-12 md:py-16 order-2 md:order-2">

          <div className="max-w-lg flex flex-col text-center md:text-left">

            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              Un percorso costruito insieme
            </h2>

            <p className="leading-relaxed mb-8">
              Ogni persona porta con sé una storia unica. Lo spazio terapeutico
              offre un'occasione per comprendere meglio le proprie difficoltà,
              valorizzare le proprie risorse e individuare nuove modalità per
              affrontare le sfide quotidiane.
            </p>

            {/* CTA centrata solo su mobile */}
            <div className="flex justify-center md:justify-start">
              <a
                href="#contatti"
                className="
                  inline-block
                  border border-[#101911]
                  px-6 py-3
                  rounded-sm
                  transition-all
                  duration-600
                  ease-in-out
                  hover:bg-[#101911]
                  hover:text-[#F4EEFC]
                  active:scale-95
                "
              >
                Contattami
              </a>
            </div>

          </div>

        </div>

      </section>
      {/*SEZIONE MOTIVAZIONALE*/ }
      <section className="flex flex-col md:flex-row bg-[#A4C2A8]">

        {/* TESTO → deve stare sotto su mobile */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 py-12 order-2 md:order-1">

          <div className="max-w-lg text-center md:text-left">

            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              Chi sono
            </h2>

            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

          </div>

        </div>

        {/* IMMAGINE → deve stare sopra su mobile */}
        <div className="w-full md:w-1/2 order-1 md:order-2">

          <img
            src="/Colline.jpg"
            alt="Studio"
            className="w-full h-64 md:h-full object-cover"
          />

        </div>

      </section>
      {/* SEZIONE MOTIVAZIONALE 2 */ }
      <section className="w-full py-32">

        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <img
            src="/Colline.jpg"
            alt="Icona sezione"
            className="w-32 h-64 mx-auto mb-6 object-contain"
          />

          <h2 className="text-5xl font-semibold mb-6">
            Inizia il tuo percorso
          </h2>

          <p className="leading-relaxed max-w-2xl mx-auto mb-10">
            Se stai attraversando un momento di difficoltà o senti il bisogno
            di uno spazio di ascolto, puoi contattarmi per un primo colloquio.
          </p>

          <a
            href="#contatti"
            className="
              inline-block
              border border-[#101911]
              px-8 py-4
              rounded-sm
              transition-all
              duration-600
              ease-in-out
              hover:bg-[#101911]
              hover:text-[#F4EEFC]
              active:scale-95
            "
          >
            Prenota un colloquio
          </a>

        </div>

      </section>
      {/* SEZIONE MOTIVAZIONALE 3 */ }
      <section className="w-full py-32 bg-[#A4C2A8]">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-semibold mb-6">
            Inizia il tuo percorso
          </h2>

          <p className="leading-relaxed max-w-2xl mx-auto mb-10">
            Se stai attraversando un momento di difficoltà o senti il bisogno
            di uno spazio di ascolto, puoi contattarmi per un primo colloquio.
          </p>

          <a
            href="#contatti"
            className="
              inline-block
              border border-[#101911]
              px-8 py-4
              rounded-sm
              transition-all
              duration-600
              ease-in-out
              hover:bg-[#101911]
              hover:text-[#F4EEFC]
              active:scale-95
            "
          >
            Prenota un colloquio
          </a>

        </div>

      </section>
      {/* CONTATTI */}
      <section id="contatti" className="w-full py-16">

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* COLONNA SINISTRA - CONTATTI */}
          <div className="flex flex-col justify-center">

            <h2 className="text-4xl font-semibold mb-8">
              Contatti
            </h2>

            <div className="space-y-3 mb-8">
              <p><strong>Email:</strong> nome@email.com</p>
              <p><strong>Telefono:</strong> +39 XXX XXX XXXX</p>
              <p><strong>Studio:</strong> Mascali, Italia</p>
            </div>

            <a
              href="mailto:nome@email.com"
              className="
                  inline-block
                  w-fit
                  border border-[#101911]
                  px-6 py-3
                  rounded-sm
                  transition-all
                  duration-600
                  ease-in-out
                  hover:bg-[#101911]
                  hover:text-[#F4EEFC]
                  active:scale-95
                "
            >
              Scrivimi una email
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/39XXXXXXXXXX"
              target="_blank"
              className="
                  inline-block
                  w-fit
                  border border-[#101911]
                  px-6 py-3
                  rounded-sm
                  transition-all
                  duration-600
                  ease-in-out
                  hover:bg-green-600
                  hover:text-[#F4EEFC]
                  active:scale-95
                "
            >
              WhatsApp
            </a>

          </div>

          {/* COLONNA DESTRA - MAPPA */}
          <div className="w-full h-full">

            <iframe
              className="w-full h-125 rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1283.3433516893986!2d15.182671508170252!3d37.72645809349529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1314065d630b2575%3A0x420eb723e72dae50!2sCinema%20Eden!5e1!3m2!1sit!2sit!4v1780064742581!5m2!1sit!2sit"
              loading="lazy"
            />

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="w-full py-12 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dott. Nome Cognome — Psicologo
      </footer>
    </main>
  );
}