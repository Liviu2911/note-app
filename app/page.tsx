import { currentUser, pb } from "@/pocketbase"
import { redirect } from "next/navigation"
import Signout from "@/components/signout"
import Notes from "@/components/notes/notes"
import Modal from "@/components/modal"
import { deleteNote } from "@/actions"

const getNotes = async () => {
  const res = await fetch("http://127.0.0.1:8090/api/collections/notes/records")
  return await res.json()
}

export default async function Home({
  searchParams,
}: {
  searchParams: {
    message: "add note" | "edit note"
    id?: string | undefined
    delete?: string | undefined
  }
}) {
  if (!currentUser) redirect("/login")
  const allNote = await getNotes()
  const notes = allNote.items.filter((note: any) => {
    return note.user === currentUser?.id
  })

  if (searchParams.delete) await deleteNote(searchParams.delete)

  return (
    <>
      <Notes username={currentUser?.username} notes={notes} />
      <Signout />

      {searchParams.message && (
        <Modal id={searchParams.id} type={searchParams.message} />
      )}
    </>
  )
}
