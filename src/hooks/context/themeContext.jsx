import { createContext } from "react";

export const ThemeContext = createContext(null);

export default function Theme({ children }) {
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
}
