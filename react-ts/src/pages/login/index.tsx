import { useState, type SubmitEvent } from "react"
import { Link, useNavigate } from "react-router"
import DsButton from "../../components/design-system/DsButton"
import PageHeader from "../../components/global/PageHeader"
import PagesLayout from "../../components/global/PagesLayout"
import { DUMMY_BASE_URL } from "../../constants"
import type { User } from "../../types/user"

type FormData = {
    username: string;
    password: string;
}

const initalValues: FormData = {
    username: '',
    password: '',
}

const Login = () => {

    const [formData, setFormData] = useState<FormData>(initalValues);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);
        fetch(`${DUMMY_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: formData.username,
                password: formData.password
            })
        })
            .then(res => res.json())
            .then((data) => {
                sessionStorage.setItem('userInfo', JSON.stringify(data));
                navigate('/app/home')
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    } // handleSubmit

    return (
        <PagesLayout>
            <PageHeader text="Login Page" />

            <div className="bg-slate-800 p-8 m-auto w-1/4 rounded-lg">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='mb-4'>
                        <label className='text-lg mb-1'>Username (emilys)</label>
                        <input
                            type="text"
                            placeholder='Enter username'
                            className='w-full border border-gray-400 bg-gray-800 px-3 py-2 text-lg rounded-md'
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='text-lg mb-1'>Passeord (emilyspass)</label>
                        <input
                            type="password"
                            placeholder='Enter password'
                            className='w-full border border-gray-400 bg-gray-800 px-3 py-2 text-lg rounded-md'
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    <div className="flex gap-4 mt-8">
                        <DsButton type="submit" color="blue" size="lg" text="Login To App" isLoading={isLoading} />
                        <Link to="/recover-password">
                            <DsButton color="gray" size="lg" text="Recover Pasword" isDisabled={isLoading} />
                        </Link>
                    </div>

                </form>
            </div>

        </PagesLayout>
    )
}

export default Login