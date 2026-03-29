import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, CheckCircle2, MapPin, Phone, User } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";

type State = "KERALA" | "KARNATAKA";

interface Package {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  state: State;
  image: string;
  region: string;
  highlights: string[];
}

const PACKAGES: Package[] = [
  {
    id: "munnar",
    name: "Munnar · Marayoor · Kanthalor",
    subtitle: "Hill Station Escape",
    duration: "4D/3N",
    state: "KERALA",
    region: "Idukki",
    image: "/assets/generated/munnar-kerala.dim_800x600.jpg",
    highlights: [
      "Tea Plantation Walk",
      "Marayoor Sandalwood Forest",
      "Kanthalor Eco Camp",
      "Eravikulam National Park",
    ],
  },
  {
    id: "cochin",
    name: "Cochin (Kochi)",
    subtitle: "Heritage & Harbour",
    duration: "2D/1N",
    state: "KERALA",
    region: "Ernakulam",
    image: "/assets/generated/cochin-kerala.dim_800x600.jpg",
    highlights: [
      "Chinese Fishing Nets",
      "Fort Kochi Walk",
      "Wonderla Theme Park",
      "Kerala Cuisine Tour",
    ],
  },
  {
    id: "vagamon",
    name: "Vagamon",
    subtitle: "Misty Highlands",
    duration: "3D/2N",
    state: "KERALA",
    region: "Kottayam",
    image: "/assets/generated/vagamon-kerala.dim_800x600.jpg",
    highlights: [
      "Paragliding",
      "Pine Forest Trek",
      "Vagamon Meadows",
      "Waterfall Visit",
    ],
  },
  {
    id: "varkala",
    name: "Varkala",
    subtitle: "Cliff & Sea",
    duration: "3D/2N",
    state: "KERALA",
    region: "Thiruvananthapuram",
    image: "/assets/generated/varkala-kerala.dim_800x600.jpg",
    highlights: [
      "Varkala Cliff",
      "Papanasam Beach",
      "Ayurvedic Spa",
      "Sunset Yoga",
    ],
  },
  {
    id: "wayanad",
    name: "Wayanad",
    subtitle: "Jungle & Wildlife",
    duration: "4D/3N",
    state: "KERALA",
    region: "Wayanad",
    image: "/assets/generated/wayanad-kerala.dim_800x600.jpg",
    highlights: [
      "Chembra Peak Trek",
      "Edakkal Caves",
      "Wildlife Safari",
      "Coffee Estate Tour",
    ],
  },
  {
    id: "alleppey",
    name: "Alleppey (Alappuzha)",
    subtitle: "Backwater Bliss",
    duration: "3D/2N",
    state: "KERALA",
    region: "Alappuzha",
    image: "/assets/generated/alleppey-kerala.dim_800x600.jpg",
    highlights: [
      "Houseboat Stay",
      "Backwater Cruise",
      "Village Walk",
      "Crab Fishing",
    ],
  },
  {
    id: "coorg",
    name: "Coorg",
    subtitle: "Coffee Country",
    duration: "3D/2N",
    state: "KARNATAKA",
    region: "Kodagu",
    image: "/assets/generated/coorg-karnataka.dim_800x600.jpg",
    highlights: [
      "Coffee Plantation Tour",
      "Abbey Falls",
      "Raja's Seat",
      "Dubare Elephant Camp",
    ],
  },
  {
    id: "chikmagalur",
    name: "Chikmagalur",
    subtitle: "Peak & Plantation",
    duration: "3D/2N",
    state: "KARNATAKA",
    region: "Chikmagalur",
    image: "/assets/generated/chikmagalur-karnataka.dim_800x600.jpg",
    highlights: [
      "Mullayanagiri Trek",
      "Baba Budangiri",
      "Coffee Estate Stay",
      "Kemmanagundi",
    ],
  },
];

const FILTERS: { label: string; value: State | "ALL" }[] = [
  { label: "KERALA", value: "KERALA" },
  { label: "KARNATAKA", value: "KARNATAKA" },
];

function EnquireDialog({ pkg }: { pkg: Package }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = `Hi! I'm interested in the *${pkg.name}* package (${pkg.subtitle}).

Name: ${name}
Phone: ${phone}
Travel Date: ${date}

Please share more details. Thank you!`;
    window.open(
      `https://wa.me/919360614159?text=${encodeURIComponent(message)}`,
      "_blank",
    );
    toast.success("Opening WhatsApp...", {
      description: "Your enquiry details are ready to send.",
    });
    setOpen(false);
    setName("");
    setPhone("");
    setDate("");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="w-full rounded-xl bg-red-brand font-bold text-white hover:bg-red-brand-dark"
          data-ocid={`packages.${pkg.id}.open_modal_button`}
        >
          Enquire Now
        </Button>
      </DialogTrigger>
      <DialogContent
        className="border-border bg-popover text-foreground sm:max-w-md"
        data-ocid={`packages.${pkg.id}.dialog`}
      >
        <DialogHeader>
          <DialogTitle className="text-lg font-black uppercase tracking-wide text-white">
            {pkg.subtitle}
          </DialogTitle>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-brand">
            <MapPin size={13} className="text-red-brand" />
            {pkg.name}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-4">
          <div className="space-y-1.5">
            <Label htmlFor={`name-${pkg.id}`} className="text-sm text-white/80">
              Your Name
            </Label>
            <div className="relative">
              <User
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-brand"
              />
              <Input
                id={`name-${pkg.id}`}
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="pl-9"
                data-ocid={`packages.${pkg.id}.input`}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor={`phone-${pkg.id}`}
              className="text-sm text-white/80"
            >
              Phone Number
            </Label>
            <div className="relative">
              <Phone
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-brand"
              />
              <Input
                id={`phone-${pkg.id}`}
                placeholder="+91 00000 00000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="pl-9"
                data-ocid={`packages.${pkg.id}.input`}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label className="text-sm text-white/80">Destination</Label>
            <Input
              value={`${pkg.name} — ${pkg.subtitle}`}
              readOnly
              className="cursor-default opacity-60"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor={`date-${pkg.id}`} className="text-sm text-white/80">
              Travel Date
            </Label>
            <div className="relative">
              <Calendar
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-brand"
              />
              <Input
                id={`date-${pkg.id}`}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="pl-9"
                data-ocid={`packages.${pkg.id}.input`}
              />
            </div>
          </div>

          <div className="flex gap-3 pt-1">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => setOpen(false)}
              data-ocid={`packages.${pkg.id}.cancel_button`}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 gap-2 bg-green-600 font-bold text-white hover:bg-green-700"
              data-ocid={`packages.${pkg.id}.submit_button`}
            >
              <SiWhatsapp size={16} />
              Send via WhatsApp
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function PackageCard({ pkg, index }: { pkg: Package; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-card"
      data-ocid={`packages.item.${index + 1}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {/* Region badge — top left */}
        <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          {pkg.region}
        </span>
        {/* Duration badge — top right */}
        <span className="absolute right-3 top-3 rounded-full bg-red-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-red">
          {pkg.duration}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-red-brand">
            {pkg.subtitle}
          </p>
          <h3 className="text-base font-black uppercase leading-tight tracking-tight text-white">
            {pkg.name}
          </h3>
        </div>

        <ul className="flex flex-1 flex-col gap-1.5">
          {pkg.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-sm text-white/75"
            >
              <CheckCircle2
                size={14}
                className="mt-0.5 shrink-0 text-red-brand"
              />
              {h}
            </li>
          ))}
        </ul>

        <EnquireDialog pkg={pkg} />
      </div>
    </motion.article>
  );
}

export function TripPackagesSection() {
  const [activeFilter, setActiveFilter] = useState<State>("KERALA");

  const filtered = PACKAGES.filter((p) => p.state === activeFilter);

  return (
    <section id="trip-packages" className="py-20">
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
              Handcrafted Journeys
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl"
          >
            Trip <span className="text-red-brand">Packages</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-muted-brand"
          >
            Carefully curated holiday packages across South India's finest
            destinations. Every journey is designed for memories that last a
            lifetime.
          </motion.p>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex rounded-full border border-border bg-card p-1"
            role="tablist"
            data-ocid="packages.filter.tab"
          >
            {FILTERS.map((f) => (
              <button
                type="button"
                key={f.value}
                role="tab"
                aria-selected={activeFilter === f.value}
                onClick={() => setActiveFilter(f.value as State)}
                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                  activeFilter === f.value
                    ? "bg-red-brand text-white shadow-red"
                    : "text-muted-brand hover:text-white"
                }`}
                data-ocid={`packages.${f.value.toLowerCase()}.tab`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            data-ocid="packages.list"
          >
            {filtered.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
