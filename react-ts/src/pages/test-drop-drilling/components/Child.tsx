import PageHeader from "../../../components/global/PageHeader"
import type { User } from "../../../types/user"

const Child = ({ user }: { user: User }) => {
  return (
    <div className="bg-gray-600 p-4 rounded-lg">
      <PageHeader text="Child Page" />
      <h1>{user.firstName} {user.lastName}</h1>
    </div>
  )
}

export default Child