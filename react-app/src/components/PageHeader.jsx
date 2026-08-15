import { LucideArrowLeft } from "lucide-react"
import { useNavigate } from "react-router"
import Button from "./Button"
import Typography from "./Typography"

const PageHeader = ({ text, element, backRoute, showBack = false }) => {

    const navigate = useNavigate();

    const back = () => {
        // navigate(backRoute ? backRoute : -1)
        navigate(backRoute || -1)
    }

    return (
        <div className="flex justify-between items-center">
            <Typography element={element ? element : 'h1'} className="text-3xl font-bold mb-4">{text}</Typography>
            {
                showBack &&
                <Button color="blue" text="Back" icon={<LucideArrowLeft />} size="lg" onClick={back} />
            }
        </div>
    )
}

export default PageHeader