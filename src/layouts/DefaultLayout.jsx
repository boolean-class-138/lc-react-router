//Contexts
import { SearchProvider } from "../contexts/SearchContext";

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <>
      <SearchProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </SearchProvider>
    </>
  );
}
