import { useFeaturedDestinations } from "@/hooks/useQueries";
import { Heart, MapPin, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { Destination } from "../backend.d";

export function DestinationsSection() {
  const { data: destinations = [], isLoading } = useFeaturedDestinations();

  return (
    <section id="destinations" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
            HANDPICKED FOR YOU
          </p>
          <h2
            className="text-3xl font-black uppercase tracking-wide text-white sm:text-4xl"
            style={{ fontWeight: 900 }}
          >
            Explore Premium Destinations
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-brand">
            From sun-drenched islands to electric cityscapes — discover the
            world&apos;s most extraordinary places, curated by our travel
            experts.
          </p>
        </motion.div>

        {isLoading ? (
          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            data-ocid="destinations.loading_state"
          >
            {["sk1", "sk2", "sk3", "sk4"].map((key) => (
              <div
                key={key}
                className="h-[420px] animate-pulse rounded-3xl bg-panel-light"
              />
            ))}
          </div>
        ) : (
          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            data-ocid="destinations.list"
          >
            {destinations.slice(0, 8).map((dest, i) => (
              <DestinationCard key={String(dest.id)} dest={dest} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function DestinationCard({
  dest,
  index,
}: { dest: Destination; index: number }) {
  const [liked, setLiked] = useState(false);
  const ocidIndex = index + 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative overflow-hidden rounded-3xl shadow-card"
      style={{ minHeight: 420 }}
      data-ocid={`destinations.item.${ocidIndex}`}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={dest.imageUrl}
          alt={dest.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, oklch(0.06 0.003 260 / 0.95) 0%, oklch(0.06 0.003 260 / 0.5) 50%, transparent 100%)",
        }}
      />

      {/* Heart button */}
      <button
        type="button"
        onClick={() => setLiked((v) => !v)}
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm transition-all hover:scale-110"
        aria-label={liked ? "Unlike" : "Like"}
        data-ocid={`destinations.toggle.${ocidIndex}`}
      >
        <Heart
          size={16}
          className={liked ? "fill-red-brand text-red-brand" : "text-white"}
        />
      </button>

      {/* Category badge */}
      <div className="absolute left-4 top-4">
        <span
          className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-600 tracking-wider text-white backdrop-blur-sm"
          style={{ fontWeight: 600 }}
        >
          {dest.category.toUpperCase()}
        </span>
      </div>

      {/* Card content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="mb-1 flex items-center gap-1 text-xs text-muted-brand">
          <MapPin size={11} className="shrink-0" />
          <span>{dest.location}</span>
        </div>
        <h3
          className="mb-1 text-xl font-800 text-white"
          style={{ fontWeight: 800 }}
        >
          {dest.name}
        </h3>
        <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-muted-brand">
          {dest.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <span
              className="text-xs font-600 text-white"
              style={{ fontWeight: 600 }}
            >
              {dest.rating.toFixed(1)}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-muted-brand">From </span>
            <span
              className="text-sm font-800 text-white"
              style={{ fontWeight: 800 }}
            >
              ${Number(dest.priceFrom).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
