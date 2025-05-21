import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('claro');

    function alterarTema() {
        setTheme(theme === 'claro' ? 'escuro' : 'claro');
    }

    return (
        <ThemeContext.Provider value={{ theme, alterarTema }}>
            {children}
        </ThemeContext.Provider>
    )
}