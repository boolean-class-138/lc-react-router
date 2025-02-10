import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-stone-700 text-white py-12 px-6">
      <div className="container max-w-7xl mx-auto">
        <Link className="bg-amber-500 p-2 rounded-md" to="/login">
          Login
        </Link>
        <div className="text-center text-sm py-6 border-t-2 border-white mt-4">
          <p>Made with ❤️ class 138</p>
        </div>
      </div>
    </footer>
  );
}
