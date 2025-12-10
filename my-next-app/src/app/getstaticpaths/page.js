// before nextjs 13

// export async function getStaticPaths() {
//     const res = await fetch("https://api.restful-api.dev/objects");
//     const data = res.json();

//     return {
//         paths: data.map((u) => ({
//             params: { id: u.id.toString() },
//         })),
//         fallback: false,
//     }

// }

// export async function getStaticProps() {
//     const res = await fetch(`https://api.restful-api.dev/objects/?id=${id}`);
//     const data = res.json();

//     return {
//         props: { data }
//     };
// }

// export default function UserDetails({ data }) {
//     return (
//         <div>
//             <h1>data Details</h1>
//             <p>ID: {data.id}</p>
//             <p>Name: {data.name}</p>
//             <p>Capacity: {data.data?.capacity}</p>
//             <p>Color: {data.data?.color}</p>
//         </div>
//     );
// }

// after nextjs 13
export default async function Products() {
    const res = await fetch("https://api.restful-api.dev/objects", { next: { revalidate: 60 } });
    const data = await res.json();

    return (
        <>
            {data.map((i, k) => (
                <div key={k}>{i.id},{i.name},{i.data?.capacity},{i.data?.color}</div>
            ))}
        </>
    )

}