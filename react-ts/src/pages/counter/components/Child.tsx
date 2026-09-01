import { useCounterStore } from "../../../stores/counter.store";

const Child = () => {
    const { count } = useCounterStore();
    return (
        <div className="bg-gray-600 p-4 rounded-2xl mt-4">
            <h2 className="text-2xl">Child Component</h2>
            <div className="text-2xl bg-slate-700 rounded-lg px-4 py-2 w-12 h-12 mt-4">{count}</div>
        </div>
    )
}

export default Child