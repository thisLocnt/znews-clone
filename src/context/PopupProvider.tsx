'use client';

import { createContext, useState, PropsWithChildren } from 'react';

interface PopupContextType {
  isActivePopup: boolean;
  setIsActivePopup: (value: boolean) => void;
}

export const PopupContext = createContext<PopupContextType>({
  isActivePopup: false,
  setIsActivePopup: () => {},
});

export default function PopupProvider({ children }: PropsWithChildren) {
  // State to track whether the menu popup is open
  const [isActivePopup, setIsActivePopup] = useState(false);

  return (
    <PopupContext.Provider value={{ isActivePopup, setIsActivePopup }}>
      {children}
    </PopupContext.Provider>
  );
}
