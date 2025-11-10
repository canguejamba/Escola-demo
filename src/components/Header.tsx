import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-brand">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">EC</span>
          <span>Escola Comunitária Novo Horizonte</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="#vision" className="hover:text-brand">
            Visione
          </Link>
          <Link href="#storie" className="hover:text-brand">
            Storie
          </Link>
          <Link href="#contatti" className="hover:text-brand">
            Contatti
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
