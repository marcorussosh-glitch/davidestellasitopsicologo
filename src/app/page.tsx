import Header from "@/components/Header";
import ContactForm from "../components/ContactForm";
import SectionReveal from "@/components/SectionReveal";

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
      <SectionReveal>
        <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen px-6 md:px-12">

          {/* IMMAGINE */}
          <div className="flex justify-center mb-10 max-w-[20vh] md:mb-0 md:pr-24 md:max-h-[60vh] md:max-w-[45vh]">
            <img
              src="/Montagna.jpg"
              alt="Studio psicologo"
              className="rounded-t-full rounded-b-none w-full max-w-sm md:max-w-md object-cover"
            />
          </div>

          {/* TESTO */}
          <div className="max-w-4xl md:pl-24 flex flex-col items-center md:items-start">

            <h1 className="text-4xl md:text-7xl font-semibold tracking-tight mb-6">
              "Fa' che il tuo viaggio non sia la bugia di una meta, ma la verità della strada"
            </h1>

            <p className="leading-relaxed mb-8 max-w-2xl">
              Ognuno di noi ha le risorse per comprendere se stesso e cambiare la propria vita.
            </p>

            <a
              href="https://www.guidapsicologi.it/studio/dott-davide-stella"
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
              target="_blank"
              rel="noopener noreferrer"
            >
              Prenota un colloquio
            </a>

          </div>

        </section>
      </SectionReveal>

      {/* MOTIVAZIONALE */}
      <SectionReveal>
        <section className="flex flex-col md:flex-row bg-muted-teal-light">

          {/* TESTO → deve stare sotto su mobile */}
          <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 py-12 order-2 md:order-1">

            <div className="max-w-lg text-center md:text-left">

              <h2 className="text-3xl md:text-6xl font-semibold mb-6">
                Ultimamente tutto sembra supecchiu.
              </h2>

              <p className="leading-relaxed">
                Stai andando avanti, tenendo insieme lavoro, casa, relazioni — ma sotto la superficie ti senti stanco, tirato in più direzioni, e fai fatica a capire di cosa hai davvero bisogno.<br />Non sei solo, e sei nel posto giusto.<br />Un percorso psicologico può aiutarti a ritrovare un senso di equilibrio, a rimettere a fuoco te stesso e a dare spazio anche a ciò che spesso metti da parte.<br /><strong>Menza Parola</strong>
              </p>

            </div>

          </div>

          {/* IMMAGINE → deve stare sopra su mobile */}
          <div className="w-full md:w-1/2 order-1 md:order-2">

            <img
              src="/Donna_spalle.jpg"
              alt="Studio"
              className="w-full h-64 md:h-full object-cover"
            />

          </div>

        </section>
      </SectionReveal>

      {/* CHI SONO */}
      <SectionReveal>
        <section className="flex flex-col md:flex-row min-h-screen" id="chi-sono">

          {/* COLONNA SINISTRA - IMMAGINE */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-12">

            <img
              src="/Uomo_fronte.jpg"
              alt="Approccio terapeutico"
              className="rounded-t-full rounded-b-none w-full max-w-sm md:max-w-md object-cover"
            />

          </div>

          {/* COLONNA DESTRA - TESTO */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-12">

            <div className="max-w-lg text-center md:text-left">

              <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                Presentazione Un percorso costruito insieme
              </h2>

              <p className="leading-relaxed">
                Sto completando la mia specializzazione in Analisi Transazionale, un modello terapeutico che mette al centro la persona, la sua autonomia e la sua capacità di scelta.
                Credo fortemente in una psicologia dal linguaggio chiaro, dove terapeuta e paziente lavorano insieme, allo stesso livello, per il raggiungimento degli obiettivi concordati.
              </p>

            </div>

          </div>

        </section>
      </SectionReveal>
      {/*SERVIZI*/ }
      <SectionReveal>
        <section className="flex flex-col md:flex-row bg-tangerine-dream-dark text-lavender-mist" id="servizi">

          {/* TESTO → deve stare sotto su mobile */}
          <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 py-12 order-2 md:order-1">

            <div className="max-w-lg text-center md:text-left">

              <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                Supporto che ti incontra esattamente dove sei.
              </h2>

              <p className="leading-relaxed">
                Il mio obiettivo primario è offrirti uno spazio sicuro dove esplorare le tue emozioni e i tuoi pensieri, senza il timore del giudizio e con l'entusiasmo di costruire una nuova consapevolezza.
              </p>

              <p className="md:py-5 leading-relaxed font-semibold">
                Mi occupo in particolare di:
              </p>

              <ul className="list-disc pl-5 space-y-1">
                <li>Ansia e sovraccarico emotivo</li>
                <li>Difficoltà relazionali e comunicative</li>
                <li>Stress legato a genitorialità e caregiving</li>
                <li>Cambiamenti e crisi d’identità</li>
                <li>Burnout e stanchezza cronica</li>
                <li>Difficoltà nel porre confini e nel riconoscere il proprio valore</li>
              </ul>

            </div>

          </div>

          {/* IMMAGINE → deve stare sopra su mobile */}
          <div className="w-full md:w-1/2 order-1 md:order-2">

            <img
              src="/Donna_closeup.jpg"
              alt="Studio"
              className="w-full h-64 md:h-full object-cover"
            />

          </div>

        </section>
      </SectionReveal>
      {/* SEZIONE MOTIVAZIONALE 2 */ }
      <SectionReveal>
        <section className="w-full py-32">

          <div className="max-w-4xl mx-auto px-6 text-center">
            
            <img
              src="/Mani.jpg"
              alt="Icona sezione"
              className="rounded-t-full rounded-b-none max-h-70 mx-auto mb-6 object-contain"
            />

            <h2 className="text-5xl font-semibold mb-6 mt-12">
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
                border border-carbon-black
                px-8 py-4
                rounded-sm
                transition-all
                duration-600
                ease-in-out
                hover:bg-carbon-black
                hover:text-lavender-mist
                active:scale-95
              "
            >
              Contattami
            </a>

          </div>

        </section>
      </SectionReveal>  
      {/* SEZIONE MOTIVAZIONALE 3 */ }
      <SectionReveal>
        <section id="studio" className="w-full py-16 bg-muted-teal-medium">

          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* COLONNA SINISTRA - CONTATTI */}
            <div className="flex flex-col justify-center">

              <h2 className="text-5xl font-semibold mb-8">
                Il mio studio
              </h2>
              <p className="mb-12">Via Siculo Orientale 9 Mascali (CT)</p>
              <div className="space-y-3 mb-8">
                <h3 className="text-xl font-semibold">Orari di ricevimento:</h3>
                <p>Lunedì - Venerdì</p>
                <p>9:00 - 18:00</p>
              </div>
            </div>

            {/* COLONNA DESTRA - MAPPA */}
            <div className="w-full h-full">

              <iframe
                className="w-full h-100 rounded-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1283.3433516893986!2d15.182671508170252!3d37.72645809349529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1314065d630b2575%3A0x420eb723e72dae50!2sCinema%20Eden!5e1!3m2!1sit!2sit!4v1780064742581!5m2!1sit!2sit"
                loading="lazy"
              />

            </div>

          </div>

        </section>
      </SectionReveal>    
      {/* CONTATTI */}
      <SectionReveal> 
        <section id="contatti" className="w-full py-16">

          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* COLONNA SINISTRA - CONTATTI */}
            <div className="flex flex-col justify-center">

              <h2 className="text-5xl font-semibold mb-8">
                Contatti
              </h2>

              <div className="space-y-3 mb-8">
                <p><strong>Email:</strong> stella.davide.psi@gmail.com</p>
                <p><strong>Telefono:</strong> +39 353 4021876</p>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/3534021876"
                target="_blank"
                className="
                    inline-block
                    w-fit
                    border border-carbon-black
                    px-6 py-3
                    rounded-sm
                    transition-all
                    duration-600
                    ease-in-out
                    hover:bg-green-600
                    hover:text-lavender-mist
                    active:scale-95
                  "
              >
                WhatsApp
              </a>

            </div>

            {/* COLONNA DESTRA - MAPPA */}
            <ContactForm />
            {/*<div className="w-full h-full">

              <iframe
                className="w-full h-125 rounded-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1283.3433516893986!2d15.182671508170252!3d37.72645809349529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1314065d630b2575%3A0x420eb723e72dae50!2sCinema%20Eden!5e1!3m2!1sit!2sit!4v1780064742581!5m2!1sit!2sit"
                loading="lazy"
              />

            </div>*/}

          </div>

        </section>
      </SectionReveal>  
      {/* FOOTER */}
      <footer className="w-full py-12 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dott. Davide Stella — Psicologo Clinico
      </footer>
    </main>
  );
}