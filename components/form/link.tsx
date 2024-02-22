import React from "react"
import NextLink from "next/link"

interface Props {
  text: string
  to: string
  classname?: string
}

function Link({ text, to, classname }: Props) {
  return (
    <NextLink
      href={to}
      className={`${classname} text-white hover:text-stone-200 transition-3 rounded py-1 med`}
    >
      {text}
    </NextLink>
  )
}

export default Link
