import { Bus, CheckCircle2, Shield, Star, Users } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const BUS_FEATURES = [
  {
    icon: Bus,
    label: "AC & Non-AC Buses",
    desc: "Comfortable fleet for all needs",
  },
  {
    icon: Shield,
    label: "Safe & Reliable",
    desc: "Experienced professional drivers",
  },
  { icon: Users, label: "Group Travel", desc: "Ideal for families & tours" },
  { icon: Star, label: "Premium Service", desc: "On-time, every time" },
];

const BUS_PHOTOS = [
  {
    name: "RAMANATHAN",
    img: "/assets/uploads/img_20260329_235135-019d3ada-8157-7718-ad22-c5174a1fe960-1.jpg",
  },
  {
    name: "M4THI FLEET",
    img: "/assets/uploads/img_20260329_235045-019d3adb-1a38-752b-aa87-54a1d5e0fa60-2.jpg",
  },
  {
    name: "KVS HOLIDAYS",
    img: "/assets/uploads/img_20260329_235012-019d3adb-4968-77a5-aea1-110aec21e0e6-3.jpg",
  },
];

export function BusCollectionSection() {
  const [selectedBus, setSelectedBus] = useState<string | null>(null);

  const handleBusClick = (name: string) => {
    setSelectedBus((prev) => (prev === name ? null : name));
  };

  const bookingUrl = selectedBus
    ? `https://wa.me/919360614159?text=Hi%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(selectedBus)}%20bus%20from%20Explore%20Holidays.`
    : "https://wa.me/919360614159?text=Hi%2C%20I%20need%20a%20bus%20for%20my%20trip%20from%20Explore%20Holidays.";

  return (
    <section id="bus-collection" className="py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-brand/40 bg-red-brand/10 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-brand" />
            <span className="text-xs font-semibold uppercase tracking-widest text-red-brand">
              Transport Partner
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-2 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl"
          >
            Bus <span className="text-red-brand">Collection</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg font-bold uppercase tracking-widest text-white/60"
          >
            Explore Holidays
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-sm text-white/40"
          >
            Tap a bus to select it, then book via WhatsApp
          </motion.p>
        </div>

        {/* Bus Photo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {BUS_PHOTOS.map((bus, i) => {
            const isSelected = selectedBus === bus.name;
            return (
              <motion.div
                key={bus.img}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => handleBusClick(bus.name)}
                data-ocid={`bus.item.${i + 1}`}
                className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? "border-red-brand shadow-lg shadow-red-brand/40 scale-105"
                    : "border-white/10"
                }`}
              >
                <img
                  src={bus.img}
                  alt={bus.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                {/* Selected checkmark */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute top-2 right-2"
                    >
                      <CheckCircle2
                        size={24}
                        className="text-red-brand drop-shadow-lg"
                        fill="black"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Bus name label */}
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5">
                  <p
                    className={`text-center text-xs font-black uppercase tracking-widest drop-shadow-lg sm:text-sm ${
                      isSelected ? "text-red-brand" : "text-white"
                    }`}
                  >
                    {bus.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {BUS_FEATURES.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-brand/20">
                <f.icon size={22} className="text-red-brand" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{f.label}</p>
                <p className="mt-0.5 text-xs text-white/50">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <AnimatePresence mode="wait">
            {selectedBus && (
              <motion.p
                key={selectedBus}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mb-3 text-sm font-semibold text-red-brand uppercase tracking-widest"
              >
                Selected: {selectedBus}
              </motion.p>
            )}
          </AnimatePresence>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="bus.primary_button"
            className="inline-flex items-center gap-2.5 rounded-full bg-red-brand px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-red transition-all hover:bg-red-brand-dark hover:scale-105"
          >
            <Bus size={18} />
            {selectedBus
              ? `Book ${selectedBus} via WhatsApp`
              : "Book a Bus via WhatsApp"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
