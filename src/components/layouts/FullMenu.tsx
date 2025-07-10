// Importing necessary dependencies
'use client';
import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { PopupContext } from '@/contexts/PopupContext';
import { fullMenu } from '@/data/dummy-data';
import Footer from './Footer';
import { PopupContext } from '@/context/PopupProvider';

// Define types for fullMenu to ensure type safety
interface MenuItem {
  id: string;
  label: string;
  link: string;
}

const bottomMenuImageUrls = [
  'https://static.znews.vn/images/channels/podcast_logo_white.svg',
  'https://static.znews.vn/images/channels/longform-logo-white_1.svg',
  'https://static.znews.vn/images/channels/story-logo-white.svg',
  'https://static.znews.vn/images/channels/lens-logo-white_1.svg',
];

const FullMenu = ({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) => {
  const { setIsActivePopup } = useContext(PopupContext);

  return (
    <>
      {/* Background Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed top-12 lg:top-14 left-0 w-full h-[calc(100vh-48px)] lg:h-[calc(100vh-56px)] bg-black/20 z-[1299]"
        />
      )}

      {/* Menu Content with Fade Animation */}
      <div
        className={`fixed top-12 lg:top-14 left-0 w-full z-[1300] transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } bg-gray-100 lg:bg-[#141329]`}
        onClick={(e) => e.stopPropagation()}>
        <div className="max-w-[865px] mx-auto p-4">
          {/* Category Grid */}
          <div className="grid grid-cols-2 gap-4 px-4 py-8 mt-8 sm:grid-cols-4 lg:mt-4 sm:px-0 sm:py-0">
            {fullMenu.map((m: MenuItem) => (
              <Link
                key={m.id}
                href={m.link}
                className="flex items-center text-sm font-medium text-center text-gray-900 sm:text-left lg:text-gray-300 lg:font-semibold hover:text-cyan-500"
                onClick={() => setIsActivePopup(false)}>
                <span className="hidden sm:inline-block w-1 h-3 bg-red-500 transform -skew-x-[20deg] mr-2"></span>
                <span className="lg:uppercase">{m.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Image Section (Desktop Only) */}
        <div className="hidden lg:flex border-t border-gray-700 bg-[#2e2e42] justify-around items-center px-16 py-4 flex-wrap">
          {bottomMenuImageUrls.map((item, index) => (
            <div key={index} className="flex items-center justify-center cursor-pointer">
              <Image
                src={item}
                alt={`Menu Image ${index}`}
                width={index === 2 || index === 3 ? 50 : 100}
                height={index === 2 || index === 3 ? 70 : 100}
              />
            </div>
          ))}
        </div>

        {/* Footer Section (Mobile Only) */}
        <div className="flex flex-col items-center p-4 lg:hidden">
          <hr className="w-1/2 my-4 border-gray-200" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default FullMenu;
