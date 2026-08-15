import { Link, useNavigate } from "react-router"
import Typography from "./Typography"
import Button from "./Button"
import { LucideArrowLeft } from "lucide-react"

const PageHeader = ({ text, showBack = false }) => {

  const navigate = useNavigate();
  const back = () => {
    navigate('/posts')
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <Typography element="h1" className="text-4xl font-bold mb-4">{text}</Typography>
        {
          showBack &&
          <Button color="blue" text="Back" size="lg" icon={<LucideArrowLeft />} onClick={back} />
        }
      </div>
      <hr className="mb-4" />
    </>
  )
}
export default PageHeader