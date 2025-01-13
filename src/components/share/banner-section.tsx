import Link from "next/link";
import { cn } from "@/utils/css/cn";

interface IBannerCard {
  title: string;
  desc: string;
  link: string;
  img: string;
  btnClassName?: string;
}

export const BannerSection = ({}) => {
  return (
    <section className="">
      <div className="container flex items-center justify-between gap-8 text-primary-0">
        <BannerCard
          title="The Best Platform for Car Rental"
          desc="Ease of doing a car rental safely and reliably. Of course at a lowprice."
          link="/"
          img="/images/ads1.jpg"
        />
        <BannerCard
          title="Easy way to rent a car at a low price"
          desc="Providing cheap car rental services and safe and comfortable facilities."
          link="/"
          img="/images/ads2.jpg"
          btnClassName="bg-information-500"
        />
      </div>
    </section>
  );
};

const BannerCard = ({ title, img, desc, link, btnClassName }: IBannerCard) => (
  <div
    style={{ backgroundImage: `url('${img}')` }}
    className="rounded-xl p-6 w-full bg-center bg-cover min-h-[360px]"
  >
    <div className="max-w-xs ">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="mt-4 font-medium text-base">{desc}</p>
      <Link className={cn("btn mt-5", btnClassName)} href={link}>
        Rental Car
      </Link>
    </div>
  </div>
);
