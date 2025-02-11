import { useEffect } from "react";
import { useAlertContext } from "../contexts/AlertContext";

export default function ContactUs() {
  const { setAlertData } = useAlertContext();

  useEffect(() => {
    setAlertData({
      type: "info",
      message: "Se chiami entro oggi avrai il 40% di sconto",
    });
  }, [setAlertData]);

  return (
    <div className="container max-w-7xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
        Contatti
      </h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <p>
            Hai voglia di una pizza deliziosa o vuoi prenotare un tavolo per una
            serata speciale? Siamo qui per te! Contattaci per ordini,
            prenotazioni o qualsiasi informazione.
          </p>
        </div>
        <div className="col-span-4">
          <ul>
            <li>
              <i className="fa-solid fa-location-pin"></i> Via del corso 138
            </li>
            <li>
              <i className="fa-solid fa-phone"></i> +39 33333333
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
