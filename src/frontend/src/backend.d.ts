import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Destination {
    id: bigint;
    name: string;
    description: string;
    imageUrl: string;
    isFeatured: boolean;
    category: string;
    rating: number;
    priceFrom: bigint;
    location: string;
}
export interface backendInterface {
    addDestination(dest: Destination): Promise<void>;
    getAllDestinations(): Promise<Array<Destination>>;
    getDestinationById(id: bigint): Promise<Destination>;
    getDestinationsByCategory(category: string): Promise<Array<Destination>>;
    getFeaturedDestinations(): Promise<Array<Destination>>;
}
