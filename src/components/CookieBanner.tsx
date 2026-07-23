"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";

export default function CookieBanner() {

  useEffect(() => {

    CookieConsent.run({

      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },

        maps: {},
      },

      // 1. Aggiunto onConsent: scatta al primo consenso dell'utente
      onConsent: () => {
        window.dispatchEvent(new Event("cookieConsentChanged"));
      },

      // 2. onChange: scatta se l'utente modifica preferenze già salvate
      onChange: () => {
        window.dispatchEvent(new Event("cookieConsentChanged"));
      },


      language: {
        default: "it",

        translations: {

          it: {

            consentModal: {

              title: "La tua privacy",

              description:
                "Questo sito utilizza cookie tecnici necessari al corretto funzionamento e, previo consenso, cookie di terze parti per visualizzare Google Maps. Puoi accettare tutti i cookie, rifiutare quelli non necessari o gestire le tue preferenze.",

              acceptAllBtn: "Accetta",

              acceptNecessaryBtn: "Rifiuta",

              showPreferencesBtn: "Preferenze",

            },


            preferencesModal: {

              title: "Preferenze cookie",

              acceptAllBtn: "Accetta tutti",

              acceptNecessaryBtn: "Solo necessari",

              savePreferencesBtn: "Salva preferenze",

              closeIconLabel: "Chiudi",


              sections: [

                {
                  title: "Cookie necessari",

                  description:
                    "Questi cookie sono indispensabili per il corretto funzionamento del sito. Permettono, ad esempio, di memorizzare le preferenze espresse sul consenso ai cookie e di garantire una navigazione sicura e corretta.",

                  linkedCategory: "necessary",
                },


                {
                  title: "Google Maps",

                  description:
                    "Utilizzati per mostrare la posizione dello studio tramite Google Maps. Questi cookie sono di terze parti e vengono installati solo previo consenso.",

                  linkedCategory: "maps",
                },

                {
                  description: `
                    Per maggiori informazioni sul trattamento dei dati personali e sull'utilizzo dei cookie, puoi consultare la
                    <a href="/cookie-policy">Cookie Policy</a>
                    e la
                    <a href="/privacy-policy">Privacy Policy</a>.
                  `,
                },

              ],
            },
          },
        },
      },


      guiOptions: {

        consentModal: {

          layout: "box wide",

          position: "bottom right",

          equalWeightButtons: false,

        },


        preferencesModal: {

          layout: "box",

        },
      },


    });

  }, []);


  return null;
}