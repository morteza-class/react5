import PageHeader from "../../../components/global/PageHeader"
import Child from "./Child"

const Parent = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <PageHeader text="Parent Page" />
      <Child />
    </div>
  )
}

export default Parent