"use client"

import { Note } from "@/types/note"

type NoteCardProps = {
 note: Note
 onClick: () => void
}

export default function NoteCard({ note, onClick }: NoteCardProps) {
 return (
  <div onClick={onClick} className="border border-slate-200 p-4 rounded-lg shadow-xs cursor-pointer hover:shadow-lg">
   <h2 className="text-slate-700 text-lg font-semibold">{note.title}</h2>
   <p className="text-slate-600 text-sm truncate">{note.content}</p>
  </div>
 )
}