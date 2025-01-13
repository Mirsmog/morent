import { HeartIcon, UserIcon, UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Search } from "../search";

interface IHeader {}

export const Header: React.FC<IHeader> = ({}) => {
  return (
    <header className="w-full bg-white border-b border-secondary-200/40">
      <div className="container flex h-28 items-center justify-between">
        <div className="flex items-center gap-16 flex-grow">
          <Link className="text-4xl font-bold text-primary-500" href={"/"}>
            MORENT
          </Link>
          <Search />
        </div>
        <div>
          <div className="flex items-center gap-5 text-secondary-400">
            <Link
              href={"/favorites"}
              className="flex border rounded-full p-2.5 border-secondary-200/40"
            >
              <HeartIcon size={24} />
            </Link>
            <Link
              className="flex border rounded-full p-2.5 border-secondary-200/40"
              href={"/profile"}
            >
              <UserRound size={24} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
