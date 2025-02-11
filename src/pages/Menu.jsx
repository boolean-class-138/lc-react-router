import Card from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchContext } from "../contexts/SearchContext";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const { search } = useSearchContext();

  const fetchMenu = () => {
    axios.get("http://localhost:3001/pizzas").then((response) => {
      setMenu(response.data);
    });
  };

  useEffect(fetchMenu, []);

  // Dato derivato dallo stato "menu"
  const menuFiltered = menu.filter((pizza) =>
    pizza.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container max-w-7xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-yellow-500 mb-6">Menu</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {menuFiltered.length ? (
          menuFiltered.map((pizza) => (
            <div key={pizza.id}>
              <Card pizza={pizza} />
            </div>
          ))
        ) : (
          <h2>La ricerca non ha prodotto risultati</h2>
        )}
      </div>
    </div>
  );
}
