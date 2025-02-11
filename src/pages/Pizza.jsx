import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Pizza() {
  const [pizza, setPizza] = useState({});
  // Prendo il parametro id dalla rotta parametrica
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/pizzas/${id}`)
      .then((response) => {
        setPizza(response.data);
      })
      .catch((error) => {
        if (error.status === 404) {
          navigate("/404");
        }
      });
  }, [id, navigate]);

  return (
    <div className="container max-w-7xl mx-auto py-12 space-y-4">
      <Link className="mb-2 inline-block" to="/menu">
        <i className="fa-solid fa-arrow-left"></i> Torna al menu
      </Link>
      <img className="w-full aspect-video object-cover" src={pizza.image} />
      <h1 className="text-3xl font-bold text-yellow-500 mb-6">{pizza.name}</h1>
      {pizza.ingredients && (
        <ul>
          {pizza.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      )}
      <p>{pizza.description}</p>
    </div>
  );
}
