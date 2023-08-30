import { NextResponse } from "next/server";
import { SSD } from "@/types";
import { cookies } from "next/headers";

export async function GET(request: Request, { params }: {params: { id: number }}) {
    const id = params.id

    const res = await fetch(`${process.env.API_URL}/api/SSD/${id}`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
        next: {
            revalidate: 0
        }
    })

    const data : SSD = await res.json()

    return NextResponse.json(data, {
        status: 200
    })
}

export async function PUT(request: Request, { params }: {params: {id: number}}) {
    const id = params.id
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken')

    const res = await fetch(`${process.env.API_URL}/api/SSD/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(request.body)
    })

    const data : SSD = await res.json()

    return NextResponse.json(data, {
        status: 203
    })
}

export async function DELETE(request: Request, { params }: { params: { id: number }}) {
    const id = params.id
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken')

    const res = await fetch(`${process.env.API_URL}/api/SSD/${id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            Authorization: `Bearer ${accessToken}`
        }
    })

    const data = await res.json()

    return NextResponse.json(data, {
        status: 204
    })
}