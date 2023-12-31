import { Navbar } from "@/components"
import CPUDetailsPage from "@/container/CPUPage/CPUDetailsPage"
import { CPU } from "@/types"
import Image from "next/image"

async function getCPU(id: number) {
    const res = await fetch(`${process.env.API_URL}/api/CPU/${id}`, {
        cache: "no-store",
        method: "GET",
    })

    const data : CPU = await res.json()

    return data
}

export default async function CPUDetails({ params }: {params: { id: number }}) {

    const cpu : CPU = await getCPU(params.id)

    return (
        <>
            <CPUDetailsPage cpu={cpu} />
        </>
    )
}