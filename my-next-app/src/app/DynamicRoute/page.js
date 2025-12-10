export default async function UserList() {
    const res = await fetch("https://api.restful-api.dev/objects");
    const users = await res.json();
    return (
        <>
            {users.map((u) => (
                <div key={u.id}>
                    <a href={'/DynamicRoute/${u.id}'}>{u.name}</a>/
                </div>
            ))}
        </>
    )
}