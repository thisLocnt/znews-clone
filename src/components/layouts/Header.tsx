'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { navList } from '@/data/dummy-data';
import FullMenu from './FullMenu';

interface NavItem {
  id: string;
  name: string;
  redirectUrl: string;
}

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [closeIconIn, setCloseIconIn] = useState(false);

  // Handle menu toggle with animation timing
  const handleMenuClick = () => {
    if (!showMenu) {
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
        setShowMenu(true);
        setShowClose(true);
        setCloseIconIn(false);
        setTimeout(() => {
          setCloseIconIn(true);
        }, 10);
      }, 200);
    } else {
      setCloseIconIn(false);
      setTimeout(() => {
        setShowClose(false);
        setShowMenu(false);
      }, 200);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between gap-4 px-4 py-4 mx-auto max-w-[1100px] sm:px-0">
        {/* Logo */}
        <Link href="/" className="relative w-[120px] h-8 lg:w-[150px] lg:h-10 flex-shrink-0">
          <Image
            src="https://static.znews.vn/images/logo-znews-light-2.svg"
            fill
            sizes="(max-width: 900px) 120px, 150px"
            style={{ objectFit: 'contain' }}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIUlEQVQoU2NkYGBg+M+സ.0A8QwA4wAAAABJRU5ErkJggg=="
            alt="ZNews Logo"
          />
        </Link>

        {/* Navigation and Menu Button */}
        <div className="flex items-center flex-1 order-first gap-4 lg:gap-8 lg:order-none">
          {/* Desktop Navigation */}
          <nav className="items-center hidden gap-6 lg:flex">
            {navList.map((item: NavItem) => (
              <Link
                key={item.id}
                href={item.redirectUrl}
                className="relative py-4 text-sm font-semibold text-gray-900 hover:text-cyan-500 group">
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-cyan-500 transition-colors duration-200"></span>
              </Link>
            ))}
          </nav>

          {/* Menu Toggle Button */}
          <button
            onClick={handleMenuClick}
            className="w-10 text-gray-900 hover:text-cyan-500"
            aria-label="Toggle Menu">
            {!showMenu ? (
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                <span
                  className={`w-1.5 h-1.5 bg-gray-900 rounded-full transition-opacity duration-200 ${
                    animating ? 'opacity-20' : 'opacity-100'
                  }`}></span>
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
              </div>
            ) : showClose ? (
              <div
                className={`transition-transform duration-400 ${
                  closeIconIn ? 'rotate-90' : '-rotate-90'
                }`}>
                <X size={24} />
              </div>
            ) : null}
          </button>
        </div>

        {/* Search Button and Input */}
        <div className="relative">
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            className="text-gray-900 hover:text-cyan-500"
            aria-label="Toggle Search">
            <Search size={20} />
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

      {/* Full Menu (Popup) */}
      <div
        className={`transition-opacity duration-300 ${
          showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
        <FullMenu open={showMenu} setOpen={setShowMenu} />
      </div>
    </header>
  );
};

export default Header;
