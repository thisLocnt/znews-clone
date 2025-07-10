// src/components/layouts/Header.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Ellipsis, Search } from "lucide-react";
import { navList, fullMenu } from "@/data/dummy-data";

const FullMenu = () => {
  return (
    <div className="absolute left-0 z-20 w-full bg-white border-t border-gray-200 top-12 lg:top-14">
      <div className="px-6 py-4 mx-auto max-w-container">
        <div className="grid grid-cols-12 gap-4">
          {fullMenu.map((m) => (
            <div
              className="col-span-6 text-center md:col-span-3 md:text-left"
              key={m.id}
            >
              <Link
                className="block font-semibold text-gray-900 hover:text-cyan-500"
                href={m.link}
              >
                {m.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between gap-8 px-6 py-4 mx-auto max-w-container">
        <Link href="/" className="relative w-[150px] h-10">
          <Image
            src="https://static.znews.vn/images/logo-znews-light-2.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ height: "100%", width: "auto" }}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIUlEQVQoU2NkYGBg+M+ABQxkYGBg+M8wCjA0MDAwAAAwCw0A8QwA4wAAAABJRU5ErkJggg=="
            alt="ZNews Logo"
          />
        </Link>
        <div className="flex items-center order-first gap-8 lg:order-none">
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 font-semibold text-gray-900">
              {navList.map((item) => (
                <li key={item.id}>
                  <Link
                    className="block py-4 border-b-2 border-transparent hover:text-cyan-500 hover:border-cyan-500"
                    href={item.redirectUrl}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="text-gray-900 hover:text-cyan-500"
            onClick={() => setShowMenu((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            <Ellipsis />
          </button>
        </div>
        <div className="relative">
          <button
            className="text-gray-900 hover:text-cyan-500"
            onClick={() => setShowSearch((prev) => !prev)}
            aria-label="Toggle Search"
          >
            <Search />
          </button>
          {showSearch && (
            <div className="absolute right-0 w-48 top-10">
              <input
                type="text"
                className="w-full p-2 text-sm text-gray-900 placeholder-gray-500 bg-white border border-gray-200 rounded-md"
                placeholder="Search..."
              />
            </div>
          )}
        </div>
      </div>
      {showMenu && <FullMenu />}
    </header>
  );
};

export default Header;
