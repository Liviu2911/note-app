"use server"

import { redirect } from "next/navigation"
import { SignUpSchema } from "./schemas"
import { currentUser, pb } from "./pocketbase"
import { revalidatePath } from "next/cache"

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
  try {
    await pb.collection("notes").delete(id)
    revalidatePath("/")
  } catch (err) {
    console.log(err)
  }
  redirect("/")
}

export const updateNote = async (id: string) => {
  redirect(`/?message=edit note&id=${id}`)
}

export const saveChanges = async (id: string, formData: FormData) => {
  const title = formData.get("title") as string
  const content = formData.get("content") as string

  try {
    await pb.collection("notes").update(id, {
      title,
      content,
    })
    revalidatePath("/")
  } catch (err) {
    console.log(err)
  }
}

export const addNote = async (formData: FormData) => {
  const title = formData.get("title") as string
  const content = formData.get("content") as string
  const newNote = { title, content, user: [currentUser?.id] }
  try {
    await pb.collection("notes").create(newNote)
    revalidatePath("/")
  } catch (err) {
    console.log(err)
  }
}
