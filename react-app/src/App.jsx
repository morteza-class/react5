import { LucideCheckCircle, LucidePencil, LucideTrash, LucideUndo } from 'lucide-react';
import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Loading from './components/Loading';
import Todos from './components/todo/Todos';



function App() {



  return (
    <main className='bg-slate-900 text-gray-200 min-h-screen p-8'>
      <Todos />
    </main>
  )
}

export default App
