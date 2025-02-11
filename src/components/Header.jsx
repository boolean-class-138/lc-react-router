import MainNav from "./MainNav";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";
import { useSearchContext } from "../contexts/SearchContext";

export default function Header() {
  const location = useLocation();
  const { search, setSearch } = useSearchContext();

  return (
    <header className="bg-stone-700 text-white p-6">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-x-4">
          <MainNav />
          {location.pathname === "/menu" && (
            <input
              className="border border-neutral-300 rounded-md p-2"
              type="search"
              placeholder="Cerca..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          )}
        </div>
      </div>
    </header>
  );
}
