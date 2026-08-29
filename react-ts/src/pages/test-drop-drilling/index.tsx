import PageHeader from "../../components/global/PageHeader"
import type { User } from "../../types/user"
import Parent from "./components/Parent"

const TestDropDrilling = () => {

  const userData: User = {
    id: 1,
    firstName: 'Morteza',
    lastName: 'QorbanAlizade',
    gender: 'Male',
    username: 'morteza@qo',
    accessToken: '',
    email: 'morteza@gmail.com',
    image: ''
  }

  return (
    <>
      <PageHeader text="Test Drop Drilling" />
      <Parent user={userData} />
    </>
  )
}

export default TestDropDrilling