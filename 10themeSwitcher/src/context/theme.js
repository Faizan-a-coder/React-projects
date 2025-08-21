import { useContext,createContext } from "react";

// 1.Create the Context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// 2.Create the Provider
export const ThemeProvider = ThemeContext.Provider

// 3.make the customHook to get in different files
export default function useTheme(){
    return useContext(ThemeContext)
}

