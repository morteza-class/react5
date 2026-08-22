import { LucideArrowLeft } from "lucide-react";
import type { ReactElement } from "react";
import { useNavigate } from "react-router";
import DsButton from "../design-system/DsButton";
import DsTypography from "../design-system/DsTypography";

type PropTypes = {
    text: string;
    element?: ReactElement
    backRoute?: string;
    showBack?: boolean;
}


const PageHeader = ({ text, element, backRoute, showBack = false }: PropTypes) => {

    const navigate = useNavigate();

    const back = () => {
        backRoute ? navigate(backRoute) : navigate(-1);
    }

    return (
        <div className="flex justify-between items-center">
            <DsTypography element={element ? element : 'h1'} className="text-3xl font-bold mb-4">{text}</DsTypography>
            {
                showBack &&
                <DsButton color="blue" text="Back" icon={<LucideArrowLeft />} size="lg" onClick={back} />
            }
        </div>
    )
}

export default PageHeader