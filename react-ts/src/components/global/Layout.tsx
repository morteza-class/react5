import { Outlet } from "react-router";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className='bg-slate-900 text-gray-200 min-h-screen p-8 pt-20'>
        <Outlet />
      </main>
    </>
  )
};

export default Layout;