import { useContext } from "react";
import { UserContext } from "..";
import PageHeader from "../../../components/global/PageHeader";

const Child = () => {

  const user = useContext(UserContext);

  return (
    <div className="bg-gray-600 p-4 rounded-lg">
      <PageHeader text="Child Page" />
      <h1>{user?.firstName} {user?.lastName}</h1>
    </div>
  )
}

export default Child