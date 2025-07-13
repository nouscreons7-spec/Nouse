'use client';

import React, { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [navItems, setNavItems] = useState([]);



  return (
    <NavContext.Provider
      value={{ navItems, setNavItems }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
