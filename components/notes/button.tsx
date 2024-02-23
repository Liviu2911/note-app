import { deleteNote, updateNote } from "../../actions"
import React from "react"
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"

interface Props {
  variant: "edit" | "delete"
  id: string
}

function Button({ variant, id }: Props) {
  return (
    <form
      action={async () => {
        "use server"
        if (variant === "edit") return updateNote(id)
        return deleteNote(id)
      }}
    >
      <button
        type="submit"
        className={`transition-3 border border-stone-400 rounded p-1 text-stone-400 ${
          variant === "edit"
            ? "hover:border-green-700 hover:bg-green-700 hover:text-white"
            : "hover:border-red-700 hover:bg-red-700 hover:text-white"
        }`}
      >
        {variant === "delete" ? <MdDelete /> : <FaEdit />}
      </button>
    </form>
  )
}

export default Button
