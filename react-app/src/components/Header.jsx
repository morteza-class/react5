import { NavLink } from "react-router"

const Header = () => {

	const links = [
		{ title: 'Home', link: '/home' },
		{ title: 'About Us', link: '/about-us' },
		{ title: 'Contact Us', link: '/contact-us' },
		{ title: 'Todo List', link: '/todo-list' },
		{ title: 'Posts', link: '/posts' },
	]

	return (
		<header className="bg-slate-800 p-4 fixed top-0 right-0 left-0">
			<nav>
				<ul className="flex justify-center gap-12">
					{
						links.map((item, index) => {
							return (
								<li key={index}>
									<NavLink
										to={item.link}
										className={({ isActive }) => `text-xl text-gray-400 hover:text-gray-300 ${isActive ? 'text-blue-500!' : ''}`}
									>
										{item.title}
									</NavLink>
								</li>
							)
						})
					}

				</ul>
			</nav>
		</header>
	)
}

export default Header