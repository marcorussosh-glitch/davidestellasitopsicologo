import Footer from "@/components/Footer";

export const metadata = {
  title: "Psicologo Davide Stella",
  description:
    "Prenota ora il tuo primo colloquio gratuito - Disponibile a Mascali(CT) e online. Consulenza e sostegno psicologico per bambini, adolescenti e adulti nella gestione di ansia, stress e difficoltà relazionali.",
}

export default function CookiePolicy() {
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

            <h1 className="text-5xl font-semibold mb-10">
              Cookie Policy
            </h1>

            <p className="mb-6">
              Questa Cookie Policy descrive l'utilizzo dei cookie da parte del presente
              sito web e le modalità con cui l'utente può gestire le proprie preferenze.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Cosa sono i cookie
            </h2>

            <p className="mb-6">
              I cookie sono piccoli file di testo che vengono salvati sul dispositivo
              dell'utente durante la navigazione. Servono a garantire il corretto
              funzionamento del sito, migliorare l'esperienza di utilizizzo e,
              in alcuni casi, fornire servizi di terze parti.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Cookie tecnici
            </h2>

            <p className="mb-6">
              Questo sito utilizza esclusivamente cookie tecnici necessari al corretto
              funzionamento della piattaforma. Tali cookie consentono, ad esempio, di
              memorizzare le preferenze espresse dall'utente riguardo al consenso dei
              cookie e garantire le funzionalità essenziali del sito.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Google Maps
            </h2>

            <p className="mb-6">
              Il sito integra Google Maps per mostrare la posizione dello studio.
              Google Maps può installare cookie e raccogliere dati tecnici relativi
              alla navigazione dell'utente. Il caricamento della mappa avviene solo
              previo consenso ai cookie di terze parti.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Gestione del consenso
            </h2>

            <p className="mb-6">
              Al primo accesso al sito è possibile scegliere se accettare o rifiutare
              i cookie non necessari. Le preferenze possono essere modificate in
              qualsiasi momento tramite il pannello di gestione dei cookie.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Come disabilitare i cookie
            </h2>

            <p className="mb-6">
              Oltre alle preferenze offerte dal sito, l'utente può gestire o eliminare
              i cookie direttamente dalle impostazioni del proprio browser. La
              disabilitazione dei cookie tecnici potrebbe compromettere alcune
              funzionalità del sito.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Contatti
            </h2>

            <p className="mb-6">
              Per qualsiasi informazione relativa all'utilizzo dei cookie è possibile
              contattare il titolare del trattamento ai recapiti indicati in home page.
            </p>

            <p className="mt-10 text-sm text-gray-500">
              Ultimo aggiornamento: {new Date().getMonth() + 1}{" "}
              {new Date().getFullYear()}
            </p>

          </div>

        </section>

        <Footer />

      </main>

    </>
  );
}