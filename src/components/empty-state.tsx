import { Empty } from "./icons"

export default function EmptyState() {
 return (
  <div className="flex items-center justify-center h-screen">
   <div className="flex flex-col items-center justify-center max-w-2xl mx-auto overflow-hidden p-4">
    <Empty />
    <p className="text-slate-700 text-center mt-8">You haven&apos;t created any notes yet.</p>
   </div>
  </div>
 )
}