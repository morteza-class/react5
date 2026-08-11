import { Link } from 'react-router';
import './App.css';
import AppRoutes from './routing/Routes';

function App() {
  return (
    <div className='bg-slate-900 text-gray-200 min-h-screen'>
      <header className='bg-slate-700 px-8 py-4 '>
        <nav>
          <ul className='flex gap-6 text-lg'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/posts">Posts</Link></li>
          </ul>
        </nav>
      </header>
      <main className='h-full p-8'>
        <AppRoutes />
      </main>
    </div>
  )
}

export default App
