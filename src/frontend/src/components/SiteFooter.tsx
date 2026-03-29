import { Mail, Phone } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const FOOTER_LINKS = [
  {
    heading: "Discover",
    links: [
      "Top Destinations",
      "Beach Escapes",
      "City Breaks",
      "Adventure Tours",
    ],
  },
  {
    heading: "Plan",
    links: [
      "Travel Guides",
      "Best Time to Visit",
      "Visa Information",
      "Packing Lists",
    ],
  },
  {
    heading: "Book",
    links: ["Flights", "Hotels", "Transfers", "Experiences"],
  },
  {
    heading: "Support",
    links: [
      "Help Center",
      "Contact Us",
      "Cancellation Policy",
      "Travel Insurance",
    ],
  },
  {
    heading: "Company",
    links: ["About Us", "Careers", "Press", "Partners"],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" style={{ backgroundColor: "oklch(0.08 0.004 260)" }}>
      <div className="border-t border-border" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Brand */}
          <div className="lg:w-64">
            <a
              href="/"
              className="mb-4 flex items-center gap-3"
              data-ocid="footer.link"
            >
              <img
                src="/assets/generated/eh-shield-logo-transparent.dim_200x200.png"
                alt="EH Logo"
                className="h-8 w-8 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span
                  className="text-[9px] font-700 tracking-[0.2em] text-muted-brand"
                  style={{ fontWeight: 700 }}
                >
                  EXPLORE
                </span>
                <span
                  className="text-xs font-900 tracking-[0.15em] text-white"
                  style={{ fontWeight: 900 }}
                >
                  HOLIDAYS
                </span>
              </div>
            </a>
            <p className="mb-5 text-sm leading-relaxed text-muted-brand">
              Your gateway to the world&apos;s most breathtaking destinations.
              Premium travel, expertly curated.
            </p>
            {/* Contact info */}
            <div className="mb-5 space-y-2">
              <a
                href="tel:+919360614159"
                className="flex items-center gap-2 text-sm text-muted-brand transition-colors hover:text-white"
                data-ocid="footer.link"
              >
                <Phone size={13} />
                <span>93606 14159</span>
              </a>
              <a
                href="mailto:kddhileep5@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-brand transition-colors hover:text-white"
                data-ocid="footer.link"
              >
                <Mail size={13} />
                <span>kddhileep5@gmail.com</span>
              </a>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919360614159"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-brand transition-all hover:border-green-500/50 hover:text-green-400"
                data-ocid="footer.link"
              >
                <SiWhatsapp size={14} />
              </a>
              <a
                href="https://instagram.com/_explore_holidays_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-brand transition-all hover:border-red-brand/50 hover:text-red-brand"
                data-ocid="footer.link"
              >
                <SiInstagram size={14} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {FOOTER_LINKS.map((col) => (
              <div key={col.heading}>
                <h4
                  className="mb-4 text-xs font-700 uppercase tracking-[0.15em] text-white"
                  style={{ fontWeight: 700 }}
                >
                  {col.heading}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="/"
                        className="text-sm text-muted-brand transition-colors hover:text-white"
                        data-ocid="footer.link"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-center text-xs text-muted-brand sm:flex-row sm:px-6 lg:px-8">
          <span>© {year} Explore Holidays. All rights reserved.</span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-brand underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
