import PageHeader from "../../../components/global/PageHeader"
import type { User } from "../../../types/user"
import Child from "./Child"

const Parent = ({ user }: { user: User }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <PageHeader text="Parent Page" />
      <Child user={user} />
    </div>
  )
}

export default Parent