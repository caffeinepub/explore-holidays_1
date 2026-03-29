import { motion } from "motion/react";

const FEATURES = [
  {
    id: "smart-booking",
    title: "Smart Booking",
    description:
      "AI-powered booking engine that finds the best prices and availability across thousands of hotels and flights.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),
  },
  {
    id: "curated-deals",
    title: "Curated Deals",
    description:
      "Exclusive hand-picked deals from our global network of premium hotels, resorts, and experience providers.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 6h.008v.008H6V6z"
        />
      </svg>
    ),
  },
  {
    id: "support",
    title: "24/7 Support",
    description:
      "Round-the-clock concierge support from our expert travel team, wherever you are in the world.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: "offline-maps",
    title: "Offline Maps",
    description:
      "Download detailed maps and guides for your destination — navigate confidently without internet access.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c-.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
        />
      </svg>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "oklch(0.11 0.006 260)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p
            className="mb-2 text-xs font-700 tracking-[0.3em] text-red-brand"
            style={{ fontWeight: 700 }}
          >
            APP FEATURES
          </p>
          <h2
            className="text-3xl font-black uppercase tracking-wide text-white sm:text-4xl"
            style={{ fontWeight: 900 }}
          >
            Revolutionize Your Travel
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-brand">
            The Explore Holidays app puts the world at your fingertips — every
            feature crafted to make your journey seamless and unforgettable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border p-6 transition-all duration-300 hover:border-red-brand/40 hover:bg-panel"
              data-ocid={`features.card.${i + 1}`}
            >
              <div className="mb-5 inline-flex rounded-xl border border-red-brand/30 p-3 text-red-brand transition-all group-hover:border-red-brand/60 group-hover:bg-red-brand/10">
                {feature.icon}
              </div>
              <h3
                className="mb-2 text-base font-700 text-white"
                style={{ fontWeight: 700 }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-brand">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
