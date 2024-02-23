import React from "react"
import "../../app/globals.scss"
import Heading from "../form/heading"
import Link from "next/link"
import { IoCloseSharp } from "react-icons/io5"
import Submit from "../form/submit"
import { pb } from "@/pocketbase"
import { addNote, saveChanges } from "@/actions"
import { redirect } from "next/navigation"
interface Props {
  type: "edit note" | "add note"
  id?: string
}

async function Modal({ type, id }: Props) {
  const note =
    type === "edit note"
      ? await pb.collection("notes").getOne(id || "")
      : undefined

  return (
    <div className="absolute w-full min-h-screen left-0 top-0 flex justify-center items-center modal z-20">
      <form
        action={async e => {
          "use server"
          type === "add note" ? addNote(e) : saveChanges(note?.id || "", e)
          redirect("/")
        }}
        className="flex flex-col gap-10 px-10 py-10 border border-stone-400 rounded relative"
      >
        <Link
          href="/"
          className="text-stone-400 hover:text-rose-500 transition-3 text-2xl absolute right-0 top-0 m-4"
        >
          <IoCloseSharp />
        </Link>
        <Heading text={type} />

        <div className="flex flex-col gap-4">
          <label htmlFor="title" className="text-stone-400 capitalize">
            Title
          </label>
          <input
            name="title"
            defaultValue={note?.title}
            type="text"
            placeholder="title..."
            className="outline-none border border-stone-400 text-stone-400 focus:border-stone-100 focus:text-stone-100 transition-3 px-4 bg-stone-950 rounded py-1 placeholder:text-stone-400 placeholder:italic"
          />
        </div>

        <textarea
          name="content"
          id={"textarea"}
          defaultValue={note?.content}
          placeholder="content..."
          className="bg-stone-950 outline-none border border-stone-400 rounded focus:border-white focus:text-white text-stone-400 w-72 px-4 placeholder:text-stone-400 placeholder:italic max-h-48 min-h-8"
        />
        <Submit text={type === "add note" ? "Add New Note" : "Save Changes"} />
      </form>
    </div>
  )
}

export default Modal
