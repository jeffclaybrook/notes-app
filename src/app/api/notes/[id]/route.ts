import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import Note from "@/models/note"

export async function PATCH(
 req: Request,
 context: { params: { id: string } }
) {
 await db()
 const { id } = context.params
 const data = await req.json()
 const note = await Note.findByIdAndUpdate(id, data, { new: true })
 return NextResponse.json(note)
}

export async function DELETE(
 req: Request,
 context: { params: { id: string } }
) {
 await db()
 const { id } = context.params
 await Note.findByIdAndDelete(id)
 return NextResponse.json({ success: true })
}