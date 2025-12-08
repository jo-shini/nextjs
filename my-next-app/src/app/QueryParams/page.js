import Link from "next/link";

export default function SendingData() {
    return (
        <div>
            <h1>Home</h1>
            <Link href={{ pathname: "/QueryParams/ReceivingData", query: { name: "Joshi", age: 22 } }}>Profile</Link>
        </div>
    )
}