import { createContext, useState, useContext } from "react";

// 1️⃣ Creo il contesto
const SearchContext = createContext();

// 2️⃣ Creo il componente custom provider
function SearchProvider({ children }) {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

// 3️⃣ Definisco un hook custom per facilitare il "consumo" del contesto
function useSearchContext() {
  const context = useContext(SearchContext);
  return context;
}

export { SearchProvider, useSearchContext };
