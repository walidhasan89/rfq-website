import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';

export default function AuthorNavbarIsland({ currentPath }: { currentPath: string }) {
  return (
    <ThemeProvider>
      <Navbar currentPath={currentPath} />
    </ThemeProvider>
  );
}