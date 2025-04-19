import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import Note from "@/models/note"

export async function PATCH(req: Request) {
 await db()
 const url = new URL(req.url)
 const id = url.pathname.split("/").pop()
 const data = await req.json()
 const note = await Note.findByIdAndUpdate(id, data, { new: true })
 return NextResponse.json(note)
}

export async function DELETE(req: Request) {
 await db()
 const url = new URL(req.url)
 const id = url.pathname.split("/").pop()
 await Note.findByIdAndDelete(id)
 return NextResponse.json({ success: true })
}