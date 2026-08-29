import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

const THEME_EVENT = 'rfq-theme-change';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light';
  }

  try {
    const stored = window.localStorage.getItem('rfq-theme');

    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
  } catch {
    // Use the current document theme when storage is unavailable.
  }

  const root = document.documentElement;

  return root.classList.contains('dark') ||
    root.dataset.theme === 'dark'
    ? 'dark'
    : 'light';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  root.classList.toggle('dark', theme === 'dark');
  root.dataset.theme = theme;

  try {
    window.localStorage.setItem('rfq-theme', theme);
  } catch {
    // Theme still works when storage is unavailable.
  }
}

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const syncTheme = (event: Event) => {
      const nextTheme = (event as CustomEvent<Theme>).detail;

      if (nextTheme === 'dark' || nextTheme === 'light') {
        setTheme(nextTheme);
      }
    };

    window.addEventListener(
      THEME_EVENT,
      syncTheme as EventListener
    );

    return () => {
      window.removeEventListener(
        THEME_EVENT,
        syncTheme as EventListener
      );
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme =
      theme === 'light' ? 'dark' : 'light';

    setTheme(nextTheme);
    applyTheme(nextTheme);

    window.dispatchEvent(
      new CustomEvent<Theme>(THEME_EVENT, {
        detail: nextTheme,
      })
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);