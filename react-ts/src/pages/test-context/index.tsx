import { createContext } from "react";
import PageHeader from "../../components/global/PageHeader"
import type { User } from "../../types/user"
import Parent from "./components/Parent"

export const UserContext = createContext<User | null>(null);

const TestContext = () => {
  const userData: User = {
    id: 1,
    firstName: 'Morteza',
    lastName: 'QorbanAlizade',
    gender: 'Male',
    username: 'morteza_qo',
    accessToken: '',
    email: 'morteza@gmail.com',
    image: ''
  }

  return (
    <UserContext value={userData}>
      <PageHeader text="Test Context" />
      <Parent />
    </UserContext>
  )
}

export default TestContext