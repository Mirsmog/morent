import Link from "next/link";
import React from "react";

interface IFooter {}

export const Footer: React.FC<IFooter> = ({}) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="pt-20 pb-16 bg-white mt-16">
      <div className="container">
        <div className="flex justify-between pb-9">
          <div>
            <Link className="text-4xl font-bold text-primary-500" href={"/"}>
              MORENT
            </Link>
            <p className="font-medium text-base max-w-72 text-secondary-600/70 mt-4">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div>
            <nav className="flex gap-24">
              <div>
                <h4 className="footer__nav-title">About</h4>
                <ul className="flex flex-col mt-7 font-medium text-secondary-600/70 gap-5">
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
                <h4 className="footer__nav-title">Community</h4>
                <ul className="flex flex-col mt-7 font-medium text-secondary-600/70 gap-5">
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
                <h4 className="footer__nav-title">Socials</h4>
                <ul className="flex flex-col mt-7 font-medium text-secondary-600/70 gap-5">
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

        <div className="pt-9 border-t border-secondary-600/15 flex justify-between items-center font-semibold text-secondary-500">
          <p>©{currentYear} MORENT. All rights reserved</p>
          <div className="flex items-center gap-16">
            <Link href={"/"}>Privacy & Policy</Link>
            <Link href={"/"}>Terms & Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
