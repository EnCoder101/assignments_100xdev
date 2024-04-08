"use client"
import { useState } from "react"

export default function Interactive() {
    const [count, setCount] = useState(0)
    return (
        <div className="flex items-center flex-col pt-5">
            <h1 className="font-bold text-2xl mb-2">Client Page</h1>
            <p className="text-center px-20 my-4">This route features a count button that demonstrates the power of client-side interactivity in Next.js. Click the button and see the count go up! This interactive feature is powered by the "use client" directive in Next.js, which allows this component to be rendered on the client-side.</p>
            <button className="text-white bg-black border border-black focus:outline-none hover:bg-gray-500 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-2"
                onClick={() => {
                    setCount((prevVal) => (
                        prevVal + 1
                    ))
                }}>
                Count {count}
            </button>
        </div>
    )
}