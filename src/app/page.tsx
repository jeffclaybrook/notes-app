"use client"

import { useEffect, useState } from "react"
import { Note } from "@/types/note"
import { Add } from "@/components/icons"
import BottomSheet from "@/components/bottom-sheet"
import EmptyState from "@/components/empty-state"
import Navbar from "@/components/navbar"
import NoteForm from "@/components/note-form"
import NotesList from "@/components/notes-list"
import Spinner from "@/components/spinner"

export default function Home() {
 const [notes, setNotes] = useState<Note[]>([])
 const [loading, setLoading] = useState(true)
 const [query, setQuery] = useState("")
 const [view, setView] = useState<"grid" | "list">("grid")
 const [sheetOpen, setSheetOpen] = useState(false)
 const [selectedNote, setSelectedNote] = useState<Note | null>(null)

 useEffect(() => {
  const fetchNotes = async () => {
   const res = await fetch("/api/notes")
   const data = await res.json()
   setNotes(data)
   setLoading(false)
  }

  fetchNotes()
 }, [])

 const filteredNotes = notes.filter(note =>
  note.title.toLowerCase().includes(query.toLowerCase()) ||
  note.content.toLowerCase().includes(query.toLowerCase())
 )

 const handleSave = async (note: Note) => {
  if (note._id) {
   const res = await fetch(`/api/notes/${note._id}`, {
    method: "PATCH",
    body: JSON.stringify(note),
    headers: { "Content-Type": "application/json" }
   })
   const updated = await res.json()
   setNotes(notes.map(note => (note._id === updated._id ? updated : note)))
  } else {
   const res = await fetch("/api/notes", {
    method: "POST",
    body: JSON.stringify(note),
    headers: { "Content-Type": "application/json" }
   })
   const newNote = await res.json()
   setNotes([newNote, ...notes])
  }

  setSheetOpen(false)
  setSelectedNote(null)
 }

 const handleDelete = async () => {
  if (!selectedNote) return

  await fetch(`/api/notes/${selectedNote._id}`, {
   method: "DELETE"
  })
  setNotes(notes.filter(note => note._id !== selectedNote._id))
  setSheetOpen(false)
  setSelectedNote(null)
 }

 const openCreateSheet = () => {
  setSelectedNote(null)
  setSheetOpen(true)
 }

 const openEditSheet = (note: Note) => {
  setSelectedNote(note)
  setSheetOpen(true)
 }

 return (
  <>
   {loading ? (
    <Spinner />
   ) : (
    <>
     {notes.length === 0 ? (
      <EmptyState />
     ) : (
      <>
       <Navbar
        query={query}
        setQuery={setQuery}
        view={view}
        setView={setView}
       />
       <NotesList
        notes={filteredNotes}
        view={view}
        onNoteClick={openEditSheet}
       />
      </>
     )}
     <button
      onClick={openCreateSheet}
      aria-label="Create note"
      className="fixed bottom-6 right-6 flex items-center gap-2 text-white bg-[#4c5d87] p-4 lg:px-6 rounded-xl shadow-lg cursor-pointer hover:bg-slate-700"
     >
      <Add />
      <span className="hidden lg:flex">Create</span>
     </button>
     <BottomSheet
      isOpen={sheetOpen}
      onClose={() => setSheetOpen(false)}
     >
      <NoteForm
       initialNote={selectedNote || undefined}
       onSave={handleSave}
       onDelete={selectedNote ? handleDelete : undefined}
       onCancel={() => {
        setSheetOpen(false)
        setSelectedNote(null)
       }}
      />
     </BottomSheet>
    </>
   )}
  </>
 )
}