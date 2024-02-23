import React from "react"
import Note from "./note"
import { RecordModel } from "pocketbase"
import { IoIosAdd } from "react-icons/io"
import { redirect } from "next/navigation"

interface Props {
  username: string
  notes: RecordModel[]
}

function Notes({ username, notes }: Props) {
  return (
    <div className="flex flex-col gap-10 w-full mt-20">
      <h1 className="text-stone-300 text-xl text-center med">
        {username}'s notes
      </h1>
      <div className="flex flex-row gap-10 ml-10 mt-10">
        {notes.map(note => {
          const { title, content, id } = note
          return <Note key={note.id} title={title} content={content} id={id} />
        })}
        <form
          action={async () => {
            "use server"
            redirect("/?message=add note")
          }}
        >
          <button
            type="submit"
            className="p-1 bg-green-600 hover:bg-green-500 hover:text-white rounded-full mt-10 transition-3 "
          >
            <IoIosAdd />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Notes
