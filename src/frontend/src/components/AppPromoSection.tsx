import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function AppPromoSection() {
  return (
    <section id="app-promo" className="overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <p
              className="mb-2 text-xs font-700 tracking-[0.3em] text-red-brand"
              style={{ fontWeight: 700 }}
            >
              DOWNLOAD THE APP
            </p>
            <h2
              className="mb-5 text-3xl font-black uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl"
              style={{ fontWeight: 900 }}
            >
              Your Holiday,
              <br />
              <span className="text-red-brand">Your Way</span>
            </h2>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-muted-brand">
              Plan, book, and manage every aspect of your perfect holiday from
              the palm of your hand. Access exclusive deals, offline maps, and
              24/7 concierge service — all in one beautifully designed app.
            </p>

            <ul className="mb-8 space-y-3 text-left">
              {[
                "Personalised destination recommendations",
                "Real-time flight and hotel availability",
                "Instant booking confirmation & e-tickets",
                "Itinerary builder with local experiences",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted-brand"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-brand/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-brand" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="/features"
              className="inline-flex items-center gap-2 text-sm font-700 text-red-brand transition-all hover:gap-3"
              style={{ fontWeight: 700 }}
              data-ocid="app_promo.link"
            >
              What&apos;s more <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Phone mockups */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex flex-1 items-center justify-center"
            style={{ minHeight: 480 }}
          >
            <PhoneMockups />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const PHONE_SCREENS = [
  {
    id: "bali",
    z: 0,
    rotate: -12,
    translateX: -90,
    translateY: 20,
    scale: 0.88,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300&h=600&fit=crop",
  },
  {
    id: "maldives",
    z: 10,
    rotate: 0,
    translateX: 0,
    translateY: 0,
    scale: 1,
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=300&h=600&fit=crop",
  },
  {
    id: "santorini",
    z: 0,
    rotate: 12,
    translateX: 90,
    translateY: 20,
    scale: 0.88,
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=300&h=600&fit=crop",
  },
];

function PhoneMockups() {
  return (
    <div className="relative h-[440px] w-full max-w-[420px]">
      {PHONE_SCREENS.map((phone, i) => (
        <div
          key={phone.id}
          className="absolute left-1/2 top-1/2"
          style={{
            zIndex: phone.z,
            transform: `translate(-50%, -50%) translateX(${phone.translateX}px) translateY(${phone.translateY}px) rotate(${phone.rotate}deg) scale(${phone.scale})`,
          }}
        >
          {/* Phone frame */}
          <div
            className="relative overflow-hidden rounded-[2.5rem] border-4 shadow-card"
            style={{
              width: 160,
              height: 320,
              borderColor: "oklch(0.25 0.008 260)",
              backgroundColor: "oklch(0.09 0.005 260)",
              boxShadow:
                i === 1
                  ? "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px oklch(0.35 0.01 260)"
                  : "0 16px 40px rgba(0,0,0,0.5)",
            }}
          >
            {/* Notch */}
            <div
              className="absolute left-1/2 top-3 z-10 h-4 w-16 -translate-x-1/2 rounded-full"
              style={{ backgroundColor: "oklch(0.09 0.005 260)" }}
            />
            {/* Screen */}
            <img
              src={phone.image}
              alt="App screen"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {/* Screen overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, oklch(0.06 0.003 260 / 0.4) 0%, transparent 30%, oklch(0.06 0.003 260 / 0.5) 100%)",
              }}
            />
            {/* Status bar */}
            <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-5 pt-2 text-[8px] text-white/80">
              <span>9:41</span>
              <span>●●●</span>
            </div>
          </div>
        </div>
      ))}

      {/* Glow effect beneath center phone */}
      <div
        className="absolute bottom-0 left-1/2 h-24 w-48 -translate-x-1/2 rounded-full"
        style={{
          background: "oklch(0.53 0.22 27 / 0.15)",
          filter: "blur(24px)",
        }}
      />
    </div>
  );
}
