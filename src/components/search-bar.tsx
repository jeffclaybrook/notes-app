"use client"

import { Search } from "./icons"

type SearchBarProps = {
 query: string
 setQuery: (value: string) => void
}

export default function SearchBar({ query, setQuery }: SearchBarProps) {
 return (
  <div className="flex items-center justify-center max-w-xl w-full relative">
   <Search className="text-slate-500 absolute inset-y-[9px] left-2 pointer-events-none" />
   <input
    type="text"
    placeholder="Search"
    value={query}
    onChange={e => setQuery(e.target.value)}
    className="w-full border border-slate-200 rounded-md px-4 pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
   />
  </div>
 )
}