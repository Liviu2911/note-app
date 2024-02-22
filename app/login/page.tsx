import { currentUser } from "@/pocketbase"
import { redirect } from "next/navigation"
import FormLayout from "@/components/form/layout"
import React from "react"

function Login({ searchParams }: { searchParams: { message: string } }) {
  if (currentUser) redirect("/")
  console.log(currentUser)

  return <FormLayout message={searchParams.message} />
}

export default Login
