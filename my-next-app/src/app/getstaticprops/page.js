// before nextjs 13
// export async function getStaticProps() {

//     const res = await fetch("https://api.restful-api.dev/objects");
//     const data = res.json();

//     return {
//         props: { data },
//         revalidate: 60,  //ISR regenerate every 60 sec
//     }
// }

// export default function Products({ data }) {
//     return (
//         <>
//             {data.map((i, k) => (
//                 <div key={k}>{i.id},{i.name},{i.data?.capacity},{i.data?.color}</div>
//             ))}
//         </>
//     )
// }

// after next js 13+
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