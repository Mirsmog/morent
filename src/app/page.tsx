import {
  FuelIcon,
  HeartIcon,
  LifeBuoyIcon,
  SearchIcon,
  Settings2Icon,
  UsersRoundIcon,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <header>
        <div>
          <Link href={"/"}>MORENT</Link>

          <div>
            <form>
              <div>
                <button type="submit">
                  <SearchIcon />
                </button>
                <input placeholder="Search something here" />
                <Link href={"/search"}>
                  <Settings2Icon />
                </Link>
              </div>
            </form>
          </div>
          <div>
            <div>
              <HeartIcon />
              <div>User</div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div>
            <div>
              <h2>The Best Platform for Car Rental</h2>
              <p>
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
              <Link href={"/"}>Rental Car</Link>
              <div>
                <img alt="car" />
              </div>
            </div>

            <div>
              <h2>Easy way to rent a car at a low price</h2>
              <p>
                Providing cheap car rental services and safe and comfortable
                facilities.
              </p>
              <Link href={"/"}>Rental Car</Link>
              <div>
                <img alt="car" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3>Popular car</h3>
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
        </section>

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
