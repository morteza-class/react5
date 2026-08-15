import { NavLink } from "react-router"

const Header = () => {
  return (
    <header className='bg-slate-700 px-8 py-4 '>
      <nav>
        <ul className='flex justify-center gap-12 text-lg'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about-us">About Us</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
          <li><NavLink to="/posts">Posts</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header