"use client"

import { Note } from "@/types/note"
import NoteCard from "./note-card"

type NotesListProps = {
 notes: Note[]
 view: "grid" | "list"
 onNoteClick: (note: Note) => void
}

export default function NotesList({ notes, view, onNoteClick }: NotesListProps) {
 return (
  <section className={view === "grid" ? "grid grid-cols-2 lg:grid-cols-4 gap-4 p-4" : "flex flex-col gap-4 p-4 max-w-3xl mx-auto"}>
   {notes.map(note => (
    <NoteCard
     key={note._id}
     note={note}
     onClick={() => onNoteClick(note)}
    />
   ))}
  </section>
 )
}