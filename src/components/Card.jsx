import { Link } from "react-router-dom";

export default function Card({ pizza }) {
  return (
    <div className="p-4 shadow-lg text-center space-y-2 h-full">
      <Link to={`/menu/${pizza.id}`}>
        <img
          className="aspect-square object-cover mb-2"
          src={pizza.image}
          alt={pizza.name}
        />
        <h3 className="text-yellow-600 text-lg font-bold">{pizza.name}</h3>
      </Link>
      <p>{pizza.description}</p>
    </div>
  );
}
