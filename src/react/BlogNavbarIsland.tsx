import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';

export default function BlogNavbarIsland({ currentPath = '/blog' }: { currentPath?: string }) {
  return (
    <ThemeProvider>
      <Navbar currentPath={currentPath} />
    </ThemeProvider>
  );
}