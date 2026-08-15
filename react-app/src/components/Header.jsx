import { NavLink } from "react-router"

const Header = () => {

  const activeLink = (isActive) => {
    return isActive ? 'text-red-500' : ''
  }

  return (
    <header className='bg-slate-700 px-8 py-4 '>
      <nav>
        <ul className='flex justify-center gap-12 text-lg'>
          <li><NavLink to="/" className={({ isActive }) => activeLink(isActive)}>Home</NavLink></li>
          <li><NavLink to="/about-us" className={({ isActive }) => activeLink(isActive)}>About Us</NavLink></li>
          <li><NavLink to="/users" className={({ isActive }) => activeLink(isActive)}>Users</NavLink></li>
          <li><NavLink to="/posts" className={({ isActive }) => activeLink(isActive)}>Posts</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header