"use server"

import { redirect } from "next/navigation"
import { SignUpSchema } from "./schemas"
import { pb } from "./pocketbase"

export const signin = async (formData: FormData, error?: string) => {
  if (error) {
    redirect(`/signup?message=${error}`)
  } else {
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    let path = "/"

    try {
      await pb.collection("users").authWithPassword(email, password)
      path = "/"
    } catch (err) {
      console.error(err)
      // @ts-ignore
      path = `/login?message=Invalid login credentils`
    }

    redirect(path)
  }
}

export const signup = async (formData: FormData) => {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const username = formData.get("username") as string

  let error: string | undefined

  try {
    SignUpSchema.parse({ email, password, username })
    try {
      await pb.collection("users").create({
        email,
        password,
        username,
        passwordConfirm: password,
        name: username,
      })
    } catch (err) {
      console.log("sign up errorororooror")
      // @ts-ignore
      console.error(err.response.data.username)
      // @ts-ignore
      if (err.response.data.username) error = "Username already exists"
      // @ts-ignore
      else if (err.response.data.email) error = "Email already exists"
      else error = "Could not sing up"
    }
  } catch (err) {
    // @ts-ignore
    const zodError = err.issues[0].message
    error = zodError
  }

  await signin(formData, error)
}

export const signout = async () => {
  pb.authStore.clear()
  redirect("/login")
}

export const deleteNote = async (id: string) => {
  await pb.collection("users").delete(id)
}

export const updateNote = async (id: string) => {}
