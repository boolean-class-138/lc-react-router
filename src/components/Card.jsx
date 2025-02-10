import { Link } from "react-router-dom";

export default function Card({ pizza }) {
  return (
    <div className="p-4 shadow-lg text-center space-y-2 h-full">
      <img
        className="aspect-square object-cover"
        src={pizza.image}
        alt={pizza.name}
      />
      <Link to={`/menu/${pizza.id}`}>
        <h3 className="text-yellow-600 text-lg font-bold">{pizza.name}</h3>
      </Link>
      <p>{pizza.description}</p>
    </div>
  );
}
