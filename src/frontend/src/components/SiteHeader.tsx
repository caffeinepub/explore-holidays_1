import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Destinations", href: "#destinations" },
  { label: "Planning", href: "#features" },
  { label: "Booking", href: "#app-promo" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background:
          "linear-gradient(to bottom, oklch(0.09 0.005 260 / 0.98), oklch(0.09 0.005 260 / 0.92))",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid oklch(0.25 0.008 260 / 0.6)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="/" className="flex items-center gap-3" data-ocid="nav.link">
            <img
              src="/assets/generated/eh-logo-clean-transparent.dim_200x200.png"
              alt="EH Shield Logo"
              className="h-9 w-9 object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-700 tracking-[0.2em] text-muted-brand">
                EXPLORE
              </span>
              <span
                className="text-sm font-900 tracking-[0.15em] text-white"
                style={{ fontWeight: 900 }}
              >
                HOLIDAYS
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-500 text-muted-brand transition-colors duration-150 hover:text-white"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Button
              className="hidden rounded-full bg-red-brand px-5 text-sm font-700 text-white shadow-red hover:bg-red-brand-dark md:inline-flex"
              style={{ fontWeight: 700 }}
              data-ocid="nav.button"
            >
              Log In
            </Button>
            <button
              type="button"
              className="flex items-center text-white md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-panel md:hidden"
          >
            <nav
              className="flex flex-col px-4 py-3"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-3 text-sm font-500 text-muted-brand transition-colors hover:text-white"
                  onClick={() => setMobileOpen(false)}
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="mt-2 rounded-full bg-red-brand font-700 text-white hover:bg-red-brand-dark"
                style={{ fontWeight: 700 }}
                data-ocid="nav.button"
              >
                Log In
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
