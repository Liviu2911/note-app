import { signout } from "../actions"
import React from "react"

function Signout() {
  return (
    <form action={signout} className="absolute right-0 top-0 m-10">
      <button className="text-white hover:text-rose-500 transition-3 med">
        Sign out
      </button>
    </form>
  )
}

export default Signout
