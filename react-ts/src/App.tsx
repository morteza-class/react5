import './App.css';
import DsButton from './components/design-system/DsButton';

function App() {
  return (
    <>
      <main className='bg-slate-900 text-gray-200 min-h-screen p-8 pt-20'>
        <DsButton text='Sample Button' size='lg' color='green' />
      </main>
    </>
  )
}

export default App
