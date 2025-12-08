"use client"
// import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function ReceivingData() {
    // const router = useRouter();
    // const { name, age } = router.query;

    const searchparams = useSearchParams();
    const name = searchparams.get("name");
    const age = searchparams.get("age");
    return (
        <div>
            <h2>Profile</h2>
            <p>Name :{name}</p>
            <p>age :{age}</p>
        </div>
    )
}