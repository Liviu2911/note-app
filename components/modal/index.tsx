import React from "react"
import "../../app/globals.scss"

interface Props {
  type: "edit note" | "add note"
}

function Modal({ type }: Props) {
  return (
    <div className="absolute w-full min-h-screen left-0 top-0 flex justify-center items-center modal z-20"></div>
  )
}

export default Modal
