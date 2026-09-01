import { LoaderCircle, LucideLogOut, LucideMoon, LucideSun } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router";
import { DUMMY_BASE_URL } from "../../constants";
import { useAuthStore } from "../../stores/auth.store";
import { useGlobalStore } from "../../stores/global.store";


const Header = () => {

	const navigate = useNavigate();
	const [mainLoading, setMainLoading] = useState(true);
	const { theme, toggleTheme } = useGlobalStore();
	const { user, setUser } = useAuthStore();

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
		{ title: 'Drop Drilling', link: '/app/drop-drilling' },
		{ title: 'Test Context', link: '/app/test-context' },
		{ title: 'Counter', link: '/app/counter' },
	]

	const getMeApi = async () => {
		const res = await fetch(`${DUMMY_BASE_URL}/auth/me`, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // Pass JWT via Authorization header
			}
		})

		const data = await res.json()
		if (res.ok) {
			return data
		} else {
			toast.error(data.message);
			afterLogout();
		}
	}

	const getMeData = async () => {
		const data = await getMeApi();
		setUser(data);
		setMainLoading(false);
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
			<header className="bg-gray-300 dark:bg-slate-800 p-4 fixed top-0 right-0 left-0">
				<nav className="flex justify-between px-4">
					<ul className="flex justify-center gap-12">
						{
							links.map((item, index) => {
								return (
									<li key={index}>
										<NavLink
											to={item.link}
											className={({ isActive }) => `text-xl text-gray-800 dark:text-gray-400 hover:text-blue-500 dark:hover:text-gray-300 ${isActive ? 'text-blue-500!' : ''}`}
										>
											{item.title}
										</NavLink>
									</li>
								)
							})
						}

					</ul>
					<div className="flex gap-2 items-center text-white">

						{
							<span onClick={toggleTheme} className="cursor-pointer text-gray-800 dark:text-gray-200">
								{theme === 'light' ? <LucideMoon /> : <LucideSun />}
							</span>
						}

						<Link to="/app/profile" className="flex items-center gap-1 text-lg text-gray-800 dark:text-gray-200">
							<img src={user?.image} alt={user?.firstName + ' ' + user?.lastName} className="w-9 h-9 p-1 bg-gray-400 dark:bg-slate-600 rounded-full" />
							{user?.firstName + ' ' + user?.lastName}
						</Link>
						<LucideLogOut className="text-red-500 cursor-pointer" size={18} onClick={logout} />
					</div>
				</nav>
			</header>

			{
				mainLoading &&
				<div className="w-screen h-screen fixed top-0 right-0 bg-gray-300 dark:bg-slate-700 text-gray-800 dark:text-white text-3xl flex gap-3 flex-col justify-center items-center">
					<LoaderCircle size={50} className="animate-spin" />
					Please Wait A Moment ...
				</div>
			}


		</>
	)
}

export default Header