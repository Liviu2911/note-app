import { signin, signup } from "@/actions"
import React from "react"
import Heading from "./heading"
import Input from "./input"
import Submit from "./submit"
import Link from "./link"

interface Props {
  register?: true
  message?: string
}

function FormLayout({ register, message }: Props) {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form
        action={register ? signup : signin}
        className="px-10 py-10 rounded border border-stone-400 flex flex-col gap-10"
      >
        <Heading text={register ? "Sign Up" : "Login"} />

        <div className="flex flex-col gap-10">
          <Input type="email" />
          {register && <Input type="username" />}
          <Input type="password" />
        </div>

        <Submit text={register ? "Sign Up" : "Login"} />

        <div className="flex flex-col gap-4">
          <Link
            to={register ? "/login" : "/signup"}
            text={register ? "Log In" : "Create Account"}
            classname="bg-green-600 hover:bg-green-700 text-center"
          />
          <Link
            to="/google"
            text="Google"
            classname="bg-rose-600 hover:bg-rose-700 text-center"
          />
        </div>
      </form>
      {message && (
        <h1 className={`absolute mt-[600px] text-red-500`}>{message}</h1>
      )}
    </div>
  )
}

export default FormLayout
