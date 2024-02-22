import React from "react"

interface Props {
  text: string
}

function Submit({ text }: Props) {
  return (
    <button className="outline-none bg-blue-600 rounded text-white py-1 hover:bg-blue-700 hover:text-stone-200 transition-3">
      {text}
    </button>
  )
}

export default Submit
