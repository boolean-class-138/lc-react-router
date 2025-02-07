export default function Card({ pizza }) {
  return (
    <div className="p-4 shadow-lg text-center">
      <img
        className="aspect-square object-cover"
        src={pizza.image}
        alt={pizza.name}
      />
      <h3 className="text-yellow-600 text-lg font-bold">{pizza.name}</h3>
    </div>
  );
}
