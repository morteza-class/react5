import { LucideLogOut, LucideUser2 } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { DUMMY_BASE_URL } from "../../constants";
import type { MeResponse } from "../../types/user";


const Header = () => {

	const navigate = useNavigate();
	const [user, setUser] = useState<MeResponse | null>(null);

	const links = [
		{ title: 'Home', link: '/app/home' },
		{ title: 'About Us', link: '/app/about-us' },
		{ title: 'Contact Us', link: '/app/contact-us' },
		{ title: 'Todo List', link: '/app/todo-list' },
		{ title: 'Posts', link: '/app/posts' },
	]

	// method 1
	/* useEffect(() => {
		const userData = sessionStorage.getItem('userInfo');

		if (!userData) {
			navigate('/login')
		} else {
			setUser(JSON.parse(userData))
		}
	}, []) */


	// method 2
	useEffect(() => {

		if (!sessionStorage.getItem('token')) {
			navigate('/login');
			return
		}

		fetch(`${DUMMY_BASE_URL}/auth/me`, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
			}
		})
			.then(res => res.json())
			.then((data: MeResponse) => {
				setUser(data)
			});
	}, [])

	const logout = () => {
		// sessionStorage.removeItem('userInfo'); // method 1
		sessionStorage.removeItem('token'); // method 2
		navigate('/login')
	}

	return (
		<header className="bg-slate-800 p-4 fixed top-0 right-0 left-0">
			<nav className="flex justify-between px-4">
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
				<div className="flex gap-2 items-center text-white">
					<LucideUser2 />
					{user?.firstName + ' ' + user?.lastName}
					<LucideLogOut className="text-red-500 cursor-pointer" size={18} onClick={logout} />
				</div>
			</nav>
		</header>
	)
}

export default Header