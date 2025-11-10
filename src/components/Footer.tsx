import Link from "next/link";

export function Footer() {
  return (
    <footer id="contatti" className="bg-slate-900 py-10 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold">Rimaniamo in contatto</p>
          <p className="mt-2 max-w-md text-sm text-slate-300">
            Iscriviti alla nostra newsletter per seguire l&apos;evoluzione della Escola Comunitária Novo Horizonte.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-slate-300">
          <Link href="mailto:info@novohorizonte.org" className="hover:text-white">
            info@novohorizonte.org
          </Link>
          <span>© {new Date().getFullYear()} Escola Comunitária Novo Horizonte</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
