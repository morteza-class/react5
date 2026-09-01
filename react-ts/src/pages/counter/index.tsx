import DsButton from "../../components/design-system/DsButton"
import PageHeader from "../../components/global/PageHeader"
import { useCounterStore } from "../../stores/counter.store"
import Parent from "./components/Parent"

const Counter = () => {

    const {increment, decrement} = useCounterStore();

    return (
        <>
            <PageHeader text="Counter with Zustand" />
            <div className="flex gap-4 my-4">
                <DsButton color="blue" text="Increment" size="md" onClick={increment} />
                <DsButton color="red" text="Decrement" size="md" onClick={decrement} />
            </div>
            <Parent />
        </>
    )
}

export default Counter