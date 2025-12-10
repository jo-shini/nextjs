export default async function userdata({ params }) {

    const { id } = params;
    console.log(params, "id");

    const res = await fetch(`https://api.restful-api.dev/objects/?id=${id}`, {
        cache: "no-store"
    });
    const user = await res.json();

    console.log(res, "fewf")

    return (
        <div>
            <h1>User Details</h1>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Capacity: {user.data?.capacity}</p>
            <p>Color: {user.data?.color}</p>
        </div>
    )
}