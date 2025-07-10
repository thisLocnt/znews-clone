'use client';

import { useContext } from 'react';
import { Menu, FileText, PlayCircle, Mic } from 'lucide-react';
import { PopupContext } from '@/context/PopupProvider';

interface MenuItem {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  onClick?: () => void;
}

const MobileMenu = () => {
  const { setIsActivePopup } = useContext(PopupContext);

  const menuItems: MenuItem[] = [
    {
      icon: Menu,
      label: 'CHUYÊN MỤC',
      onClick: () => setIsActivePopup(true),
    },
    {
      icon: FileText,
      label: 'TIN MỚI',
      onClick: () => console.log('Navigate to News'),
    },
    {
      icon: PlayCircle,
      label: 'VIDEO',
      onClick: () => console.log('Navigate to Video'),
    },
    {
      icon: Mic,
      label: 'PODCAST',
      onClick: () => console.log('Navigate to Podcast'),
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-around py-2 bg-white border-t border-gray-200 md:hidden">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center cursor-pointer"
          onClick={item.onClick}>
          <item.icon size={20} className="text-gray-900" />
          <span className="mt-1 text-xs font-medium text-gray-900">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default MobileMenu;
