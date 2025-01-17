import {
  FuelIcon,
  HeartIcon,
  LifeBuoyIcon,
  UsersRoundIcon,
} from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/share/header";
import { BannerSection } from "@/components/share/banner-section";
import { CatalogSection } from "@/components/share/catalog-section";
import { Footer } from "@/components/share/footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="pt-8">
        <BannerSection />
        <CatalogSection />
      </main>
      <Footer />
    </div>
  );
}
