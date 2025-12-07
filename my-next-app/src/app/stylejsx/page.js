"use client"
export default function StyleJsx() {
    return (
        <>
            <div className="box">
                Hello
            </div>
            <style jsx>
                {`
                .box {
                    background: #f0f0f0;
                padding: 20px;
                border-radius: 8px;
        }`}
            </style></>
    )
}