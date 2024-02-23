import React from "react"

function Heading({ text }: { text: string }) {
  return <h1 className="text-stone-400 med text-center capitalize">{text}</h1>
}

export default Heading
