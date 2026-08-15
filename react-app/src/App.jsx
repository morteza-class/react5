import './App.css';
import Header from "./components/Header";
import AppRoutes from './routing/Routes';


function App() {
  return (
    <>
      <Header />
      <main className='bg-slate-900 text-gray-200 min-h-screen p-8 pt-20'>
        <AppRoutes />
      </main>
    </>
  )
}


export default App
