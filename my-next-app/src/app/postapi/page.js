"use client"
import { useEffect, useState } from "react";

export default function PostApi() {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        fetch("https://api.restful-api.dev/objects")
            .then(res => res.json())
            .then(data => {
                // console.log(data.map((i, k) => (i)))
                setData(data);
                setLoad(false)
            })
    }, []);

    if (load) return (<p>loading.......</p>)

    return (
        <>
            <div>
                {data.map((i, k) => (
                    <div key={k}>{i.id},{i.name},{i.data?.capacity},{i.data?.color}</div>
                ))}
            </div>
        </>
    )
}