import FormLayout from "@/components/form/layout"
import { currentUser } from "@/pocketbase"
import { redirect } from "next/navigation"
import React from "react"

function SignUp({ searchParams }: { searchParams: { message: string } }) {
  if (currentUser) redirect("/")
  return <FormLayout register message={searchParams.message} />
}

export default SignUp
