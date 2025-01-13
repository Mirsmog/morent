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

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="bg-[#F6F7F9] pt-8">
        <BannerSection />
        <CatalogSection />

        <section>
          <div>
            <h3>Recomendation Car</h3>
            <Link href={"/"}>View All</Link>
          </div>
          <ul>
            <li>
              <div>
                <div>
                  <div>Nissan GT - R</div>
                  <p>Sport</p>
                </div>
                <button>
                  <HeartIcon />
                </button>
              </div>

              <div>
                <img alt="car name" />
              </div>

              <div>
                <div>
                  <div>
                    <FuelIcon />
                    <span>80L</span>
                  </div>
                  <div>
                    <LifeBuoyIcon />
                    <span>Manual</span>
                  </div>
                  <div>
                    <UsersRoundIcon />
                    <span>2 People</span>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <span>$99.00/</span>
                      <span>day</span>
                    </div>
                    <s>$100.00</s>
                  </div>
                  <Link href={"/"}>Rent Now</Link>
                </div>
              </div>
            </li>
          </ul>

          <div>
            <button>Show more car</button>
            <span>120 Car</span>
          </div>
        </section>
      </main>
      <footer>
        <div>
          <div>
            <Link href={"/"}>MORENT</Link>
            <p>
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div>
            <nav>
              <div>
                <h4>About</h4>
                <ul>
                  <li>
                    <Link href={"/how-it-works"}>How it Works</Link>
                  </li>
                  <li>
                    <Link href={"/featured"}>Featured</Link>
                  </li>
                  <li>
                    <Link href={"/partnership"}>Partnership</Link>
                  </li>
                  <li>
                    <Link href={"/business-relation"}>Business Relation</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4>Community</h4>
                <ul>
                  <li>
                    <Link href={"/events"}>Events</Link>
                  </li>
                  <li>
                    <Link href={"/blog"}>Blog</Link>
                  </li>
                  <li>
                    <Link href={"/podcast"}>Podcast</Link>
                  </li>
                  <li>
                    <Link href={"/invite-a-friend"}>Invite a Friend</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4>Socials</h4>
                <ul>
                  <li>
                    <Link href={"/discord"}>Discord</Link>
                  </li>
                  <li>
                    <Link href={"/instagram"}>Instagram</Link>
                  </li>
                  <li>
                    <Link href={"/twitter"}>Twitter</Link>
                  </li>
                  <li>
                    <Link href={"/facebook"}>Facebook</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div>
          <p>©2022 MORENT. All rights reserved</p>
          <div>
            <Link href={"/"}>Privacy & Policy</Link>
            <Link href={"/"}>Terms & Condition</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
