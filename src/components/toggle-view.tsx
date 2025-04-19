"use client"

import { Grid, List } from "./icons"

type ToggleViewProps = {
 view: "grid" | "list"
 setView: (view: "grid" | "list") => void
}

export default function ToggleView({ view, setView }: ToggleViewProps) {
 return (
  <button
   onClick={() => setView(view === "grid" ? "list" : "grid")}
   aria-label="Toggle list/grid view"
   className="text-slate-700 p-2 rounded-full cursor-pointer transition hover:bg-slate-100"
  >
   {view === "grid" ? <List /> : <Grid />}
  </button>
 )
}