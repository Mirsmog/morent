import Link from "next/link";
import { CarCard, ICarCard } from "./car-card";

interface ICarList {
  title: string;
  link?: string;
  show?: number;
  cars: ICarCard[];
}

export const CarList: React.FC<ICarList> = ({ title, link, cars, show }) => {
  const carArray = show ? cars.slice(0, show) : cars;
  return (
    <div className="mt-8">
      <div className="flex justify-between">
        <h3 className="text-secondary-300 py-2.5 px-5 font-semibold">
          {title}
        </h3>
        {link && (
          <Link className="btn btn--ghost" href={link}>
            View All
          </Link>
        )}
      </div>
      <ul className="mt-5 flex flex-wrap gap-8">
        {carArray.map((car) => (
          <CarCard {...car} />
        ))}
      </ul>
    </div>
  );
};
