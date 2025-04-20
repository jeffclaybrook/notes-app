"use client"

import { useState } from "react"
import { Note } from "@/types/note"
import { Delete } from "./icons"

type NoteFormProps = {
 onSave: (note: Note) => void
 onCancel: () => void
 initialNote?: Note
 onDelete?: () => void
}

export default function NoteForm({ onSave, onCancel, initialNote, onDelete }: NoteFormProps) {
 const [title, setTitle] = useState(initialNote?.title || "")
 const [content, setContent] = useState(initialNote?.content || "")

 return (
  <div className="flex flex-col gap-4 max-w-lg mx-auto">
   <h1 className="text-slate-700 text-lg">Note</h1>
   <form
    className="flex flex-col gap-4 w-full"
    onSubmit={(e) => {
     e.preventDefault()
     onSave({ ...initialNote, title, content })
    }}
   >
    <input
     type="text"
     placeholder="Title"
     value={title}
     onChange={e => setTitle(e.target.value)}
     className="w-full border border-slate-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
    />
    <textarea
     placeholder="Note"
     value={content}
     onChange={e => setContent(e.target.value)}
     rows={6}
     className="w-full border border-slate-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
    />
    <div className="flex items-center justify-end gap-4">
     {onDelete ? (
      <button
       type="button"
       onClick={onDelete}
       aria-label="Delete"
       className="inline-flex items-center justify-center gap-1 py-2 px-4 text-red-500 cursor-pointer transition hover:text-red-700"
      >
       <Delete />
       Delete
      </button>
     ) : (
      <button
       type="button"
       onClick={onCancel}
       aria-label="Cancel"
       className="text-gray-500 cursor-pointer transition hover:text-gray-700 px-4 py-2"
      >
       Cancel
      </button>
     )}
     <button
      type="submit"
      aria-label="Save"
      className="text-white bg-[#4c5d87] py-2 px-6 rounded-full shadow-lg cursor-pointer transition hover:bg-slate-600"
     >
      Save
     </button>
    </div>
   </form>
  </div>
 )
}