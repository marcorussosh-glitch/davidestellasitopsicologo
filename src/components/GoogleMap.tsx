"use client";

import { useEffect, useState } from "react";
import * as CookieConsent from "vanilla-cookieconsent";

export default function GoogleMap() {

  const [accepted, setAccepted] = useState(false);

  useEffect(() => {

  const checkConsent = () => {
    const mapsAccepted = CookieConsent?.acceptedCategory("maps");
    setAccepted(mapsAccepted);
  };


  // controllo iniziale
  checkConsent();


  // ascolta cambiamenti
  window.addEventListener(
    "cookieConsentChanged",
    checkConsent
  );


  return () => {
    window.removeEventListener(
      "cookieConsentChanged",
      checkConsent
    );
  };

}, []);

  if (!accepted) {

    return (
      <div
        className="
          w-full
          h-125
          rounded-2xl
          border
          border-carbon-black
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-8
        "
      >

        <h3 className="text-2xl font-semibold mb-4">
          Mappa non disponibile
        </h3>

        <p className="max-w-md mb-6 leading-relaxed">
          Per visualizzare la posizione dello studio tramite Google Maps,
          è necessario accettare i cookie relativi ai servizi esterni.
        </p>


        <button
          onClick={() => {
                CookieConsent.showPreferences();
            }}
          className="
            border
            border-carbon-black
            px-6
            py-3
            rounded-sm
            transition-all
            duration-500
            ease-in-out
            hover:bg-carbon-black
            hover:text-lavender-mist
            active:scale-95
            cursor-pointer
          "
        >
          Gestisci preferenze cookie
        </button>

      </div>
    );
  }


  return (

    <iframe
        className="w-full h-100 rounded-2xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73148.30124006855!2d15.149743580618248!3d37.75150184466673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x28fa189e9bec4469%3A0x76fe20e38dc51695!2sPsicologo%20Davide%20Stella!5e1!3m2!1sit!2sit!4v1781172594234!5m2!1sit!2sit"
        loading="lazy"
    />

  );
}