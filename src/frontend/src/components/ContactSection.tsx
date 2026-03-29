import { Phone } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const CONTACTS = [
  {
    id: "phone",
    icon: Phone,
    label: "Call Us",
    value: "93606 14159",
    href: "tel:+919360614159",
    newTab: false,
    color: "#ef4444",
  },
  {
    id: "whatsapp",
    icon: SiWhatsapp,
    label: "WhatsApp",
    value: "93606 14159",
    href: "https://wa.me/919360614159",
    newTab: true,
    color: "#25d366",
  },
  {
    id: "instagram",
    icon: SiInstagram,
    label: "Instagram",
    value: "_explore_holidays_",
    href: "https://instagram.com/_explore_holidays_",
    newTab: true,
    color: "#e1306c",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact-us"
      className="py-20"
      style={{ backgroundColor: "oklch(0.10 0.004 260)" }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p
            className="mb-2 text-xs font-700 uppercase tracking-[0.25em] text-red-brand"
            style={{ fontWeight: 700 }}
          >
            GET IN TOUCH
          </p>
          <h2
            className="text-3xl font-900 uppercase tracking-tight text-white sm:text-4xl"
            style={{ fontWeight: 900 }}
          >
            Contact Us
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-red-brand" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {CONTACTS.map(
            ({ id, icon: Icon, label, value, href, newTab, color }) => (
              <a
                key={id}
                href={href}
                target={newTab ? "_blank" : undefined}
                rel={newTab ? "noopener noreferrer" : undefined}
                data-ocid={`contact.${id}.button`}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-white/10 p-8 text-center transition-all duration-300 hover:border-white/20 hover:scale-105"
                style={{ backgroundColor: "oklch(0.13 0.006 260)" }}
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${color}22`, color }}
                >
                  <Icon size={28} />
                </div>
                <div>
                  <p
                    className="mb-1 text-xs font-700 uppercase tracking-[0.15em] text-muted-brand"
                    style={{ fontWeight: 700 }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-base font-600 text-white"
                    style={{ fontWeight: 600 }}
                  >
                    {value}
                  </p>
                </div>
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
