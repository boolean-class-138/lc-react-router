import { Link, NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="h-screen grid grid-cols-12 gap-4 bg-stone-700 py-4">
      <header className="col-span-4 lg:col-span-2 bg-white shadow-md p-4 rounded-tr-xl rounded-br-xl relative">
        <nav className="mt-12">
          <ul>
            <li className="py-2 border-b border-neutral-300">
              <NavLink to="/admin">
                <i className="fa-solid fa-house"></i> Dashboard
              </NavLink>
            </li>
            <li className="py-2 border-b border-neutral-300">
              <NavLink to="/admin/pizzas">
                <i className="fa-solid fa-pizza-slice"></i> Pizze
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0">
          <Link
            to="/"
            className="bg-amber-500 py-2 px-4 rounded-md text-white block text-center mx-auto"
          >
            <i className="fa-solid fa-arrow-left"></i> Torna al sito
          </Link>
        </div>
      </header>
      <main className="col-span-8 lg:col-span-10 bg-white p-4  rounded-tl-xl rounded-bl-xl">
        <Outlet />
      </main>
    </div>
  );
}
