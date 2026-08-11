import { Route, Routes } from "react-router";
import './App.css';
import AboutUs from "./pages/about-us";
import Home from "./pages/home";


function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
      </header>
      <main className='bg-slate-900 text-gray-200 min-h-screen p-8'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
    </>
  )
}


export default App
