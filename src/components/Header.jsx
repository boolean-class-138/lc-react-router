import MainNav from "./MainNav";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-stone-700 text-white p-6">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <MainNav />
      </div>
    </header>
  );
}
