import { useState } from "react";
import { Outlet } from "react-router";
import { GlobalContext } from "../../contexts/GlobalContext";
import type { Theme } from "../../types/global";
import Header from "./Header";

const AppLayout = () => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    };

    return (
        <GlobalContext.Provider value={{ theme, toggleTheme }}>
            <Header />
            <main className='bg-slate-900 text-gray-200 min-h-screen p-8 pt-20'>
                <Outlet />
            </main>
        </GlobalContext.Provider>
    )
}

export default AppLayout