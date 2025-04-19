"use client"

import { useState } from "react"
import { clsx } from "clsx"
import { Close, Menu } from "./icons"
import Image from "next/image"
import SearchBar from "./search-bar"
import ToggleView from "./toggle-view"

type NavbarProps = {
 query: string
 setQuery: (value: string) => void
 view: "grid" | "list"
 setView: (view: "grid" | "list") => void
}

export default function Navbar({ query, setQuery, view, setView }: NavbarProps) {
 const [sidebarOpen, setSidebarOpen] = useState(false)

 return (
  <nav>
   <div className="flex items-center justify-between gap-4 p-4">
    <button
     onClick={() => setSidebarOpen(!sidebarOpen)}
     aria-label="Toggle sidebar"
     className="text-slate-700 p-2 rounded-full cursor-pointer transition hover:bg-slate-100"
    >
     <Menu />
    </button>
    <SearchBar query={query} setQuery={setQuery} />
    <div className="flex items-center gap-4">
     <ToggleView view={view} setView={setView} />
     <button
      aria-label="Avatar button"
      className="hidden lg:flex rounded-full cursor-pointer"
     >
      <Image
       src="/logo.png"
       alt="Jeffrey Claybrook"
       width={40}
       height={40}
       className="rounded-full"
      />
     </button>
    </div>
   </div>
   <div
    className={clsx(
     "fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform transition-transform duraiton-300 z-40",
     sidebarOpen ? "translate-x-0" : "-translate-x-full"
    )}
   >
    <div className="flex items-center justify-end p-2">
     <button
      onClick={() => setSidebarOpen(false)}
      aria-label="Close sidebar"
      className="text-slate-700 p-2 rounded-full cursor-pointer transition hover:bg-slate-100"
     >
      <Close />
     </button>
    </div>
    <ul className="flex flex-col">
     <li>List item 1</li>
     <li>List item 2</li>
     <li>List item 3</li>
     <li>List item 4</li>
    </ul>
   </div>
   {sidebarOpen && (
    <div
     onClick={() => setSidebarOpen(false)}
     className="fixed inset-0 bg-black opacity-60 z-30"
    />
   )}
  </nav>
 )
}