import './App.css';
import Header from './components/Header';
import AppRoutes from './routing/Routes';

function App() {
  return (
    <div className='bg-slate-900 text-gray-200 min-h-screen'>
      <Header />
      <main className='h-full p-8'>
        <AppRoutes />
      </main>
    </div>
  )
}

export default App
