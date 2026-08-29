import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';

export default function LegalNavbarIsland({ currentPath }: { currentPath: string }) {
  return (
    <ThemeProvider>
      <Navbar currentPath={currentPath} />
    </ThemeProvider>
  );
}