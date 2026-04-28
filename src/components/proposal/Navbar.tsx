import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#cases", label: "Cases" },
  { href: "#proposta", label: "Proposta" },
  { href: "#canais", label: "Canais" },
  { href: "#investimento", label: "Investimento" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "#0A0A0A", borderBottom: "1px solid #1A1A1A" }}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top"><Logo /></a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] text-[var(--sd-text-secondary)] hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#investimento" className="hidden md:inline-flex sd-btn-primary !py-2 !px-4 !text-[13px]">
          Falar com a equipe
        </a>
        <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#1A1A1A] bg-[#0A0A0A]">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-[var(--sd-text-secondary)]">
                {l.label}
              </a>
            ))}
            <a href="#investimento" onClick={() => setOpen(false)} className="sd-btn-primary justify-center">
              Falar com a equipe
            </a>
          </div>
        </div>
      )}
    </header>
  );
}