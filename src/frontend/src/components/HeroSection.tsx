import { ArrowRight, Smartphone } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[92vh] items-center overflow-hidden"
      id="hero"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')",
        }}
      />
      {/* Dark overlay left-to-right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, oklch(0.06 0.003 260 / 0.97) 0%, oklch(0.06 0.003 260 / 0.85) 50%, oklch(0.06 0.003 260 / 0.3) 100%)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to top, oklch(0.09 0.005 260), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Welcome Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-2 text-4xl font-black leading-tight text-white sm:text-5xl"
            style={{ fontWeight: 900 }}
          >
            WELCOME TO EXPLORE HOLIDAYS
          </motion.h1>

          {/* Nice Day subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-6 text-xl text-red-200 sm:text-2xl"
            style={{ fontWeight: 500 }}
          >
            HAVE A NICE DAY ☺️
          </motion.p>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-brand/40 bg-red-brand/10 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-brand" />
            <span
              className="text-xs font-600 tracking-widest text-red-brand"
              style={{ fontWeight: 600 }}
            >
              PREMIUM TRAVEL EXPERIENCE
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 flex flex-wrap gap-3"
          >
            <a
              href="#app-promo"
              className="inline-flex items-center gap-2 rounded-full bg-red-brand px-6 py-3 text-sm font-700 text-white shadow-red transition-all hover:bg-red-brand-dark hover:shadow-lg"
              style={{ fontWeight: 700 }}
              data-ocid="hero.primary_button"
            >
              <Smartphone size={16} />
              Get The App
            </a>
            <a
              href="#destinations"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-700 text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
              style={{ fontWeight: 700 }}
              data-ocid="hero.secondary_button"
            >
              Explore Destinations
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* App Store Badges */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <AppBadge type="apple" />
            <AppBadge type="google" />
          </motion.div>
        </div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-16 right-8 hidden flex-col gap-4 lg:flex"
      >
        {[
          { value: "500+", label: "Destinations" },
          { value: "4.9★", label: "App Rating" },
          { value: "2M+", label: "Travelers" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center backdrop-blur-sm"
          >
            <div
              className="text-xl font-900 text-white"
              style={{ fontWeight: 900 }}
            >
              {stat.value}
            </div>
            <div className="text-xs text-muted-brand">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function AppBadge({ type }: { type: "apple" | "google" }) {
  return (
    <a
      href="/download"
      className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 backdrop-blur-sm transition-all hover:bg-white/10"
      data-ocid={`hero.${type === "apple" ? "primary_button" : "secondary_button"}`}
    >
      {type === "apple" ? (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-white"
          aria-hidden="true"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-white"
          aria-hidden="true"
        >
          <path d="M3.18 23.76c.3.17.65.19.96.07l.04-.02 11.35-6.55-2.47-2.47-9.88 8.97zm14.68-8.47L15.7 13.13l-8.8 5.09 10.96-2.93zM20.46 10.5c-.4-.22-.83-.34-1.25-.34-.43 0-.85.11-1.24.33l-2.22 1.28 2.5 2.5 2.25-1.3c.69-.4 1.09-1.06 1.09-1.76-.01-.67-.42-1.31-1.13-1.71zM3.18.24L13.06 9.2l-2.5 2.5L3.22 5.16l-.04-.03A1.1 1.1 0 0 0 2 6.04v11.94c0 .42.23.8.59 1.01l.1.06 9.88-8.97L9.96 7.56 3.18.24z" />
        </svg>
      )}
      <div className="flex flex-col leading-none">
        <span className="text-[9px] text-muted-brand">
          {type === "apple" ? "Download on the" : "Get it on"}
        </span>
        <span
          className="text-xs font-600 text-white"
          style={{ fontWeight: 600 }}
        >
          {type === "apple" ? "App Store" : "Google Play"}
        </span>
      </div>
    </a>
  );
}
