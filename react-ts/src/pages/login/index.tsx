import { Link, useNavigate } from "react-router"
import DsButton from "../../components/design-system/DsButton"
import PageHeader from "../../components/global/PageHeader"
import PagesLayout from "../../components/global/PagesLayout"
import type { User } from "../../types/user"

const Login = () => {

    const navigate = useNavigate();

    const user: User = {
        name: 'Ali',
        family: "Alavi",
        mobile: '09121114422'
    }

    const loginHandler = () => {
        sessionStorage.setItem('userInfo', JSON.stringify(user));
        navigate('/app/home')
    }

    return (
        <PagesLayout>
            <PageHeader text="Login Page" />
            <div className="flex gap-4">
                <DsButton color="blue" size="lg" text="Login To App" onClick={loginHandler} />
                <Link to="/recover-password">
                    <DsButton color="gray" size="lg" text="Recover Pasword" />
                </Link>
            </div>
        </PagesLayout>
    )
}

export default Login