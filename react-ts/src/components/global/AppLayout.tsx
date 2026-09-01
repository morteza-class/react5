import { Outlet } from "react-router"
import Header from "./Header"

const AppLayout = () => {
    return (
        <>
            <Header />
            <main className='bg-gray-200 dark:bg-slate-900 text-black dark:text-gray-200 min-h-screen p-8 pt-20'>
                <Outlet />
            </main>
        </>
    )
}

export default AppLayout