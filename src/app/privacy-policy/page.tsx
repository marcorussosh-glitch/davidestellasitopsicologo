import Footer from "@/components/Footer";

export const metadata = {
  title: "Psicologo Davide Stella",
  description:
    "Prenota ora il tuo primo colloquio gratuito - Disponibile a Mascali(CT) e online. Consulenza e sostegno psicologico per bambini, adolescenti e adulti nella gestione di ansia, stress e difficoltà relazionali.",
}

export default function PrivacyPolicy() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-lavender-mist px-6 md:px-12 py-6 flex items-center justify-between">
        <div className="font-semibold text-xl">
          <a href="/">Dott. Davide Stella</a>
        </div>
      </header>
      <main className="w-full">
        <section className="w-full py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl font-semibold mb-10">Privacy Policy</h1>

            <p className="mb-6">
              Questa informativa descrive le modalità di trattamento dei dati
              personali degli utenti che visitano il sito.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Titolare del trattamento
            </h2>

            <p className="mb-6">
              Il titolare del trattamento è il Dott. Davide Stella, psicologo.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Tipologia di dati raccolti
            </h2>

            <p className="mb-6">
              Il sito può raccogliere dati di navigazione (es. indirizzo IP,
              informazioni sul browser).
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Finalità del trattamento
            </h2>

            <p className="mb-6">
              I dati vengono utilizzati esclusivamente per rispondere alle
              richieste inviate dagli utenti e per finalità strettamente
              connesse alla gestione del sito.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Conservazione dei dati
            </h2>

            <p className="mb-6">
              I dati vengono conservati per il tempo necessario a rispondere
              alle richieste e non vengono utilizzati per finalità di marketing.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Servizi di terze parti
            </h2>

            <p className="mb-6">
              Il sito può utilizzare servizi esterni come Vercel per l’hosting e
              Google Maps per la visualizzazione della posizione dello studio.
              Questi servizi possono raccogliere dati tecnici necessari al loro
              funzionamento.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Diritti dell’utente
            </h2>

            <p className="mb-6">
              L’utente può richiedere in qualsiasi momento l’accesso, la
              rettifica o la cancellazione dei propri dati scrivendo
              all’indirizzo email del titolare.
            </p>

            <p className="mt-10 text-sm text-gray-500">
              Ultimo aggiornamento: {new Date().getMonth() + 1} {new Date().getFullYear()}
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
