import { formatPriceIntl } from "@/utils/price";
import {
  FuelIcon,
  HeartIcon,
  LifeBuoyIcon,
  UsersRoundIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface ICarCard {
  id: string;
  title: string;
  price: number;
  type: string;
  image: string;
  discount?: number;
  fuelCapacity: number;
  transmission: "manual" | "auto";
  seatingCapacity: number;
}

export const CarCard: React.FC<ICarCard> = ({
  id,
  type,
  title,
  image,
  price,
  discount,
  transmission,
  fuelCapacity,
  seatingCapacity,
}) => (
  <li className="inline-flex w-[calc((100%-(32px*3))/4)] flex-col rounded-lg bg-primary-0 p-6 text-secondary-300 gap-16">
    <div className="flex items-start justify-between">
      <div>
        <div className="text-xl font-bold text-secondary-500">{title}</div>
        <p className="mt-1 text-sm font-bold">{type}</p>
      </div>
      <button>
        <HeartIcon />
      </button>
    </div>

    <div className="relative flex items-center justify-center after:bg-gradient-to-t after:from-white after:via-transparent after:to-transparent after:absolute after:left-0 after:-bottom-2 after:w-full after:content-[''] after:h-full after:z-20 overflow-hidden">
      <Image src={image} width={204} height={64} alt="car name" />
    </div>

    <div>
      <div className="flex text-secondary-300 justify-between text-sm font-medium">
        <div className="flex items-center gap-1.5">
          <FuelIcon />
          <span>{fuelCapacity}L</span>
        </div>
        <div className="flex items-center gap-1.5">
          <LifeBuoyIcon />
          <span className="capitalize">{transmission}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <UsersRoundIcon />
          <span>{seatingCapacity} People</span>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="font-bold text-sm">
          <div>
            <span className="text-xl text-secondary-500">
              {formatPriceIntl(price)}/
            </span>
            <span>day</span>
          </div>
          {discount && (
            <s>{formatPriceIntl(price + (price / 100) * discount)}</s>
          )}
        </div>
        <Link className="btn" href={`/rent/${id}`}>
          Rent Now
        </Link>
      </div>
    </div>
  </li>
);
