import { useNavigate } from "react-router"
import DsButton from "../../components/design-system/DsButton"
import PageHeader from "../../components/global/PageHeader"

const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate('/app')
  }

  return (
    <main className="bg-slate-900 text-gray-200 min-h-screen p-8 pt-20 flex items-center flex-col">
      <PageHeader text="Login Page" />
      <br />
      <DsButton text="Login To App" color="blue" type="button" size="lg" onClick={login} />
    </main>
  )
}

export default Login