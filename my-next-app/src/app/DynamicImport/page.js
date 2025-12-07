import dynamic from "next/dynamic";

const Heavychart = dynamic(() => import("../about/page"), {
    loading: () => <p>loading............</p>
})

export default function Dashboard() {
    return (
        <div>
            <p>fesvfefewfewfew</p>
            <Heavychart />
        </div>
    )
}