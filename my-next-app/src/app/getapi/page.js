"use client"

import react from "react";

export default async function getapi() {

    // const res = await fetch("https://fake-json-api.mock.beeceptor.com/users");
    const users = await res.json()

    return (
        <>
            <div>
                {users.map((i, key) => (
                    <div key={key}>
                        {i.username}
                    </div>
                ))}
            </div>
        </>
    )
}