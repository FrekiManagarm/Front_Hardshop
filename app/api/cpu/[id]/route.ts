import { CPU } from "@/types"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    const res = await fetch(`${process.env.API_URL}/api/CPU/${id}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    })

    const data : CPU = await res.json()

    return NextResponse.json(data, {
        status: 200
    })
}

export async function PUT(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    const res = await fetch(`${process.env.API_URL}/api/CPU/${id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    })

    const data : CPU = await res.json()

    return NextResponse.json(data, {
        status: 203
    })
}

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    const res = await fetch(`${process.env.API_URL}/api/Cooling/${id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })

    const data = await res.json()

    return NextResponse.json(data, {
        status: 204
    })
}