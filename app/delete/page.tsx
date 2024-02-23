import { deleteNote } from "@/actions"
import React from "react"

async function Delete({ searchParams }: { searchParams: { id: string } }) {
  const { id } = searchParams
  await deleteNote(id)
  return <div>Deletin a note...</div>
}

export default Delete
