import Array "mo:core/Array";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  type Destination = {
    id : Nat;
    name : Text;
    location : Text;
    description : Text;
    priceFrom : Nat;
    imageUrl : Text;
    category : Text;
    rating : Float;
    isFeatured : Bool;
  };

  module Destination {
    public func compare(d1 : Destination, d2 : Destination) : Order.Order {
      Nat.compare(d1.id, d2.id);
    };

    public func compareByName(d1 : Destination, d2 : Destination) : Order.Order {
      Text.compare(d1.name, d2.name);
    };

    public func compareByPrice(d1 : Destination, d2 : Destination) : Order.Order {
      Nat.compare(d1.priceFrom, d2.priceFrom);
    };

    public func compareByRating(d1 : Destination, d2 : Destination) : Order.Order {
      if (d1.rating < d2.rating) { #greater } else if (d1.rating > d2.rating) { #less } else { #equal };
    };
  };

  let destinations = Map.fromIter<Nat, Destination>([
    (
      1,
      {
        id = 1;
        name = "Santorini";
        location = "Greece";
        description = "Beautiful island with stunning sunsets and whitewashed buildings.";
        priceFrom = 1500;
        imageUrl = "https://example.com/santorini.jpg";
        category = "Beach";
        rating = 4.8;
        isFeatured = true;
      },
    ),
    (
      2,
      {
        id = 2;
        name = "Tokyo";
        location = "Japan";
        description = "Vibrant city blending tradition and modernity, famous for sushi and cherry blossoms.";
        priceFrom = 1800;
        imageUrl = "https://example.com/tokyo.jpg";
        category = "City";
        rating = 4.7;
        isFeatured = true;
      },
    ),
    (
      3,
      {
        id = 3;
        name = "Maldives";
        location = "Maldives";
        description = "Idyllic islands with crystal clear waters and luxury resorts.";
        priceFrom = 2500;
        imageUrl = "https://example.com/maldives.jpg";
        category = "Beach";
        rating = 4.9;
        isFeatured = true;
      },
    ),
    (
      4,
      {
        id = 4;
        name = "Paris";
        location = "France";
        description = "Romantic city known for the Eiffel Tower, art, and cuisine.";
        priceFrom = 1600;
        imageUrl = "https://example.com/paris.jpg";
        category = "City";
        rating = 4.6;
        isFeatured = false;
      },
    ),
    (
      5,
      {
        id = 5;
        name = "Bali";
        location = "Indonesia";
        description = "Tropical paradise with beautiful beaches, temples, and rice terraces.";
        priceFrom = 1400;
        imageUrl = "https://example.com/bali.jpg";
        category = "Beach";
        rating = 4.8;
        isFeatured = true;
      },
    ),
    (
      6,
      {
        id = 6;
        name = "New York";
        location = "USA";
        description = "Bustling city with iconic landmarks, shopping, and entertainment.";
        priceFrom = 1700;
        imageUrl = "https://example.com/newyork.jpg";
        category = "City";
        rating = 4.5;
        isFeatured = false;
      },
    ),
    (
      7,
      {
        id = 7;
        name = "Dubai";
        location = "UAE";
        description = "Modern city known for luxury shopping, skyscrapers, and desert adventures.";
        priceFrom = 2100;
        imageUrl = "https://example.com/dubai.jpg";
        category = "City";
        rating = 4.7;
        isFeatured = true;
      },
    ),
    (
      8,
      {
        id = 8;
        name = "Iceland";
        location = "Iceland";
        description = "Unique landscapes with waterfalls, geysers, and Northern Lights.";
        priceFrom = 2000;
        imageUrl = "https://example.com/iceland.jpg";
        category = "Nature";
        rating = 4.9;
        isFeatured = false;
      },
    ),
  ].values());

  public query ({ caller }) func getAllDestinations() : async [Destination] {
    destinations.values().toArray();
  };

  public query ({ caller }) func getDestinationById(id : Nat) : async Destination {
    switch (destinations.get(id)) {
      case (null) { Runtime.trap("Destination not found") };
      case (?destination) { destination };
    };
  };

  public query ({ caller }) func getFeaturedDestinations() : async [Destination] {
    destinations.values().toArray().filter(func(d) { d.isFeatured });
  };

  public query ({ caller }) func getDestinationsByCategory(category : Text) : async [Destination] {
    destinations.values().toArray().filter(func(d) { d.category == category });
  };

  public shared ({ caller }) func addDestination(dest : Destination) : async () {
    let newId = destinations.size() + 1;
    let newDest = { dest with id = newId };
    destinations.add(newId, newDest);
  };
};
