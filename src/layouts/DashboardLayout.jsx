import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="h-screen grid grid-cols-12 gap-4 bg-neutral-200">
      <header className="col-span-4 lg:col-span-2 bg-white shadow-lg p-4">
        <nav>
          <ul>
            <li>Pizzas</li>
          </ul>
        </nav>
      </header>
      <main className="col-span-8 lg:col-span-10 bg-white p-4">
        <Outlet />
      </main>
    </div>
  );
}
