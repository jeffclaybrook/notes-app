import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import Note from "@/models/note"

export async function GET() {
 await db()
 const notes = await Note.find({}).sort({ updatedAt: -1 })
 return NextResponse.json(notes)
}

export async function POST(req: Request) {
 await db()
 const data = await req.json()
 const note = await Note.create(data)
 return NextResponse.json(note)
}