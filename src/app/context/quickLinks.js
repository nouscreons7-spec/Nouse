'use client';
import React, { createContext, useContext, useState } from 'react';

const QuickLinksContext = createContext({
  quickLinks: [],
  setQuickLinks: () => {},
});

export const QuickLinksProvider = ({ children }) => {
  const [quickLinks, setQuickLinks] = useState([]);
  return (
    <QuickLinksContext.Provider value={{ quickLinks, setQuickLinks }}>
      {children}
    </QuickLinksContext.Provider>
  );
};

export const useQuickLinks = () => useContext(QuickLinksContext);
