import { useQuery } from "@tanstack/react-query";
import type { Destination } from "../backend.d";
import { useActor } from "./useActor";

const STATIC_DESTINATIONS: Destination[] = [
  {
    id: 1n,
    name: "Santorini",
    description:
      "Iconic white-washed villages perched on volcanic cliffs above the Aegean Sea.",
    imageUrl:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=500&fit=crop",
    isFeatured: true,
    category: "Island",
    rating: 4.9,
    priceFrom: 1299n,
    location: "Greece",
  },
  {
    id: 2n,
    name: "Tokyo",
    description:
      "A dazzling fusion of ultramodern skyscrapers and serene ancient temples.",
    imageUrl:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=500&fit=crop",
    isFeatured: true,
    category: "City",
    rating: 4.8,
    priceFrom: 1599n,
    location: "Japan",
  },
  {
    id: 3n,
    name: "Maldives",
    description:
      "Overwater bungalows above crystal-clear turquoise lagoons in paradise.",
    imageUrl:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=500&fit=crop",
    isFeatured: true,
    category: "Beach",
    rating: 5.0,
    priceFrom: 2499n,
    location: "Indian Ocean",
  },
  {
    id: 4n,
    name: "Paris",
    description:
      "The City of Light — romantic boulevards, art museums, and haute cuisine.",
    imageUrl:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=500&fit=crop",
    isFeatured: true,
    category: "City",
    rating: 4.8,
    priceFrom: 899n,
    location: "France",
  },
  {
    id: 5n,
    name: "Bali",
    description:
      "Terraced rice fields, sacred temples, and a legendary surfing culture.",
    imageUrl:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=500&fit=crop",
    isFeatured: true,
    category: "Island",
    rating: 4.7,
    priceFrom: 799n,
    location: "Indonesia",
  },
  {
    id: 6n,
    name: "New York",
    description:
      "The city that never sleeps — iconic skyline, Broadway, and world-class dining.",
    imageUrl:
      "https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?w=400&h=500&fit=crop",
    isFeatured: true,
    category: "City",
    rating: 4.7,
    priceFrom: 1099n,
    location: "USA",
  },
  {
    id: 7n,
    name: "Dubai",
    description:
      "Futuristic skyline, desert safaris, and the pinnacle of luxury hospitality.",
    imageUrl:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=500&fit=crop",
    isFeatured: true,
    category: "City",
    rating: 4.8,
    priceFrom: 1399n,
    location: "UAE",
  },
  {
    id: 8n,
    name: "Iceland",
    description:
      "Aurora borealis, volcanic landscapes, and geothermal hot springs await.",
    imageUrl:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=500&fit=crop",
    isFeatured: true,
    category: "Adventure",
    rating: 4.9,
    priceFrom: 1799n,
    location: "Iceland",
  },
];

export function useFeaturedDestinations() {
  const { actor, isFetching } = useActor();
  return useQuery<Destination[]>({
    queryKey: ["featured-destinations"],
    queryFn: async () => {
      if (!actor) return STATIC_DESTINATIONS;
      try {
        const results = await actor.getFeaturedDestinations();
        return results.length > 0 ? results : STATIC_DESTINATIONS;
      } catch {
        return STATIC_DESTINATIONS;
      }
    },
    enabled: !isFetching,
    placeholderData: STATIC_DESTINATIONS,
  });
}
