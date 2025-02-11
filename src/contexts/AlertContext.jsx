import Alert from "../components/Alert";
import { createContext, useState, useContext } from "react";

// 1️⃣ Creo il contesto
const AlertContext = createContext();

// 2️⃣ Creo il componente custom provider
function AlertProvider({ children }) {
  const [alertData, setAlertData] = useState({
    type: "",
    message: "",
  });

  return (
    <AlertContext.Provider value={{ alertData, setAlertData }}>
      <Alert />
      {children}
    </AlertContext.Provider>
  );
}

// 3️⃣ Definisco un hook custom per facilitare il "consumo" del contesto
function useAlertContext() {
  const context = useContext(AlertContext);
  return context;
}

export { AlertProvider, useAlertContext };
