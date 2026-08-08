import { Toaster } from 'react-hot-toast';
import './App.css';
import Todos from './components/todo/Todos';

function App() {

  return (
    <>
      <Toaster />
      <main className='bg-slate-900 text-gray-200 min-h-screen p-8'>
        <Todos />
      </main>
    </>
  )
}

export default App
