import { ICarCard } from "./car-card";
import React from "react";
import { CarList } from "./car-list";

const mockCars: ICarCard[] = Array.from({ length: 10 }, (_, i) => ({
  id: String(i),
  title: "Nissan GT - R",
  type: "Sport",
  price: 188,
  image: "/images/car.png",
  fuelCapacity: 90,
  transmission: "manual",
  seatingCapacity: 4,
  discount: 12,
}));

export const CatalogSection = ({}) => {
  return (
    <section className="container">
      <CarList title="Popular car" link="/popular" cars={mockCars} show={4} />
      <CarList title="Recomendation Car" cars={mockCars} />
    </section>
  );
};
