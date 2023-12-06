"use client"

import {createContext, ReactNode, useContext, useState} from "react";

enum Theme {
    LIGHT = "light",
    DARK = "dark"
}

const defaultTheme = {
    theme: Theme.DARK,
    handleToggleTheme: () => {
    }
}

const ThemeContext = createContext(defaultTheme)

export function ThemeProvider({children}: { children: ReactNode }) {

    const [theme, setTheme] = useState<Theme>(Theme.DARK)

    const handleToggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
    }

    // useEffect(() => {
    //     handleToggleTheme()
    // }, [theme])

    return (
        <ThemeContext.Provider value={
            {theme, handleToggleTheme}
        }>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)

    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }

    return context
}