import { Suspense, lazy } from "react";

async function getUsers() {
    const res = await fetch("https://api.restful-api.dev/objects");
    const data = await res.json();
    // console.log(data, "data");
    return data;
}

async function UserList() {
    const users = await getUsers();
    // console.log("userrrr", users)
    return (
        <>
            {users.map((i, j) =>
                <div key={j}>
                    <p>{i.id}</p>
                    <p>{i.name}</p>
                </div>)}
        </>
    )
}

// const DataList = lazy(() => <UserList />)

export default function Sus() {
    return (
        <>
            <Suspense fallback={<p>loading...........</p>}>
                <UserList />
                {/* <DataList /> */}
            </Suspense>
        </>
    )
}