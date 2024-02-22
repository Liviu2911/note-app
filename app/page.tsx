import { currentUser, pb } from "@/pocketbase"
import { redirect } from "next/navigation"
import Note from "@/components/notes/note"
import Signout from "@/components/signout"
import Notes from "@/components/notes/notes"
import Modal from "@/components/modal"

export default async function Home({
  searchParams,
}: {
  searchParams: { message: "add note" | "edit note" }
}) {
  if (!currentUser) redirect("/login")
  const todos = await (await pb.collection("notes").getList(1, 50)).items

  return (
    <>
      <Notes username={currentUser?.username} notes={todos} />
      <Signout />

      {searchParams.message && <Modal type={searchParams.message} />}
    </>
  )
}
