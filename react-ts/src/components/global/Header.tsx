import { LoaderCircle, LucideLogOut, LucideUser2 } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { DUMMY_BASE_URL } from "../../constants";
import type { User } from "../../types/user";


const Header = () => {

	const navigate = useNavigate();
	const [user, setUser] = useState<User | null>(null);
	const [mainLoading, setMainLoading] = useState(true);

	const afterLogout = () => {
		sessionStorage.removeItem('token');
		navigate('/login')
	}

	const links = [
		{ title: 'Home', link: '/app/home' },
		{ title: 'About Us', link: '/app/about-us' },
		{ title: 'Contact Us', link: '/app/contact-us' },
		{ title: 'Todo List', link: '/app/todo-list' },
		{ title: 'Posts', link: '/app/posts' },
	]

	const getMeData = () => {

		fetch(`${DUMMY_BASE_URL}/auth/me`, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // Pass JWT via Authorization header
			}
		})
			.then((res) => {
				console.log(res)
				if (res.ok) {
					return res.json()
				} else {
					afterLogout()
				}
			})
			.then((data) => {
				setUser(data);
			})
			.finally(() => {
				setMainLoading(false);
			})
	}

	useEffect(() => {
		if (!sessionStorage.getItem('token')) {
			navigate('/login')
		} else {
			getMeData();
		}
	}, [])

	const logout = () => {
		if (!confirm('Are you sure to want to logout?')) {
			return
		}
		afterLogout();
	}

	return (
		<>
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

			{
				mainLoading &&
				<div className="w-screen h-screen fixed top-0 right-0 bg-slate-700 text-white text-3xl flex gap-3 flex-col justify-center items-center">
					<LoaderCircle size={50} className="animate-spin" />
					Please Wait A Moment ...
				</div>
			}


		</>
	)
}

export default Header