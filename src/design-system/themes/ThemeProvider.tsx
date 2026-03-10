/**
 * Olamee Design System — ThemeProvider
 *
 * Injects CSS custom properties from the token layer into the DOM.
 * All components consume these variables — change a token, the UI updates.
 */

import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { lightThemeVars } from './contract';

type ThemeName = 'light' | 'dark';

interface ThemeContextValue {
  theme: ThemeName;
}

const ThemeContext = createContext<ThemeContextValue>({ theme: 'light' });

const themeMap: Record<ThemeName, Record<string, string>> = {
  light: lightThemeVars,
  // Dark theme will reuse the same variable keys with different values
  dark: lightThemeVars, // TODO: replace with darkThemeVars when designed
};

interface ThemeProviderProps {
  theme?: ThemeName;
  children: ReactNode;
}

export function ThemeProvider({ theme = 'light', children }: ThemeProviderProps) {
  const cssVars = themeMap[theme];

  const style = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(cssVars).map(([key, value]) => [key, value]),
      ) as React.CSSProperties,
    [cssVars],
  );

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div style={style} className="contents">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
