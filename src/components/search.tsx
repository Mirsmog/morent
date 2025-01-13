"use client";
import React, { useRef, useState } from "react";
import { SearchIcon, Settings2Icon, XIcon } from "lucide-react";
import Link from "next/link";

interface ISearch {}

export const Search: React.FC<ISearch> = ({}) => {
  const [inputValue, setInputValue] = useState("");
  const inputEl = useRef<HTMLInputElement | null>(null);

  const handleInputClear = () => {
    setInputValue((prev) => "");
    inputEl.current?.focus();
  };

  return (
    <div className="border-1 w-full max-w-lg overflow-hidden rounded-full border border-secondary-200/40 text-secondary-400">
      <form className="w-full">
        <div className="relative">
          <button className="absolute bottom-0 top-0 px-5 py-2" type="button">
            <SearchIcon size={24} />
          </button>
          <input
            ref={inputEl}
            className="w-full px-16 py-3 text-sm font-medium placeholder:text-secondary-400"
            placeholder="Search something here"
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
          />
          <div className="absolute bottom-0 right-0 top-0 flex items-center">
            {inputValue ? (
              <button
                onClick={handleInputClear}
                className="px-5 py-2"
                type="button"
              >
                <XIcon size={24} />
              </button>
            ) : (
              <Link className="px-5 py-2" href={"/search"}>
                <Settings2Icon />
              </Link>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
