import DsButton from "../../components/design-system/DsButton";
import PageHeader from "../../components/global/PageHeader"
import { useCounterStore } from "../../stores/counter.store"
import Parent from "./components/Parent";

const Counter = () => {

    const { increment, decrement } = useCounterStore();

    return (
        <>
            <PageHeader text="Counter Page" />
            <div className="flex gap-4 items-center">
                <DsButton color="blue" onClick={increment} text="Increment" />
                <DsButton color="red" onClick={decrement} text="Decrement" />
            </div>
            <Parent />
        </>
    )
}

export default Counter