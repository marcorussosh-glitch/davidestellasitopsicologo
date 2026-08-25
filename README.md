# Psicologo Davide Stella

Sito web vetrina realizzato per il **Dott. Davide Stella, Psicologo Clinico**, con l'obiettivo di presentare i servizi offerti, fornire informazioni sullo studio e facilitare il contatto e la prenotazione di un colloquio.

## Demo

**Sito:** [(https://www.davidestellapsicologo.it)]

## Tecnologie

* **Next.js 16** — framework React per lo sviluppo dell'applicazione
* **React 19** — sviluppo dell'interfaccia e dei componenti
* **TypeScript** — tipizzazione statica
* **Tailwind CSS 4** — styling e responsive design
* **vanilla-cookieconsent** — gestione del consenso ai cookie
* **Google Maps** — integrazione della posizione dello studio
* **Vercel** — hosting e deploy
* **Git / GitHub** — versionamento del codice

## Funzionalità

* Design responsive per desktop, tablet e mobile
* Landing page professionale
* Header e footer condivisi tra le pagine
* Navigazione interna tramite anchor link
* Pagine dedicate a Privacy Policy e Cookie Policy
* Metadata SEO tramite Next.js Metadata API
* Cookie banner personalizzato
* Gestione granulare delle preferenze sui cookie
* Integrazione di Google Maps con caricamento condizionato al consenso dell'utente
* Dominio personalizzato
* Deploy automatico tramite Vercel

## Gestione del consenso

Il progetto utilizza **vanilla-cookieconsent** per la gestione del consenso.

Sono presenti due categorie di cookie:

* **Necessari** — indispensabili per il corretto funzionamento del sito e per la gestione delle preferenze dell'utente.
* **Google Maps** — utilizzati esclusivamente per consentire la visualizzazione della mappa.

Google Maps viene caricato **solo dopo che l'utente ha espresso il proprio consenso** alla relativa categoria. In assenza del consenso viene mostrato un placeholder informativo che permette all'utente di modificare le proprie preferenze.

## Responsive Design

L'interfaccia è stata sviluppata con un approccio responsive, adattando layout, tipografia, immagini e componenti alle diverse dimensioni dello schermo.

Particolare attenzione è stata dedicata alla visualizzazione mobile del menu, delle sezioni informative, del banner cookie e della modale delle preferenze.

## Privacy

Il progetto include:

* Privacy Policy
* Cookie Policy
* Cookie banner
* Gestione delle preferenze dell'utente
* Blocco preventivo dei servizi di terze parti soggetti a consenso

## Licenza

Questo progetto è stato realizzato per un cliente e il codice non è destinato al riutilizzo commerciale senza autorizzazione.
