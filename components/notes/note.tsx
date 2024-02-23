import Link from "next/link"
import React from "react"
import Button from "./button"
import { MdDelete } from "react-icons/md"
import { redirect } from "next/navigation"

interface Props {
  title: string
  content: string
  id: string
}

function Note({ title, content, id }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="px-6 py-6 rounded border border-stone-400 hover:border-white transition-3 note flex flex-col gap-4 max-w-72">
        <h1 className="transition-3 text-stone-400">{title}</h1>
        <h2 className="transition-3 text-stone-600">{content}</h2>
      </div>

      <div className="flex items-center gap-2">
        <Button id={id} variant="edit" />
        <form
          action={async () => {
            "use server"
            redirect(`/?delete=${id}`)
          }}
        >
          <button className="p-1 rounded border border-stone-400 text-stone-400 hover:bg-rose-500 hover:text-white transition-3">
            <MdDelete />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Note
