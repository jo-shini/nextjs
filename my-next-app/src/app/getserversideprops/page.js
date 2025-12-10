// before nextjs 13

// export async function getServerSideProps() {

//     const res = await fetch("https://api.restful-api.dev/objects")
//     const data = await res.json();
//     return {
//         props: { data },
//     }

// }

// export default function Users({ data }) {
//     return (
//         <>
//             {data.map((i, k) => (
//                 <div key={k}>{i.id},{i.name},{i.data?.capacity},{i.data?.color}</div>
//             ))}
//         </>
//     )
// }

// after nextjs 13+
export default async function Products() {
    const res = await fetch("https://api.restful-api.dev/objects", { cache: "no-store" });
    const data = await res.json();

    // console.log(data, "data")

    return (
        <>
            {data.map((i, k) => (
                <div key={k}>{i.id},{i.name},{i.data?.capacity},{i.data?.color}</div>
            ))}
        </>
    )
}