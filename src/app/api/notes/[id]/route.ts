import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import Note from "@/models/note"

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
 await db()
 const data = await req.json()
 const note = await Note.findByIdAndUpdate(params.id, data, { new: true })
 return NextResponse.json(note)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
 await db()
 await Note.findByIdAndDelete(params.id)
 return NextResponse.json({ success: true })
}