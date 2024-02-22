import React from "react"

interface Props {
  type: "password" | "email" | "username"
}

function Input({ type }: Props) {
  const inputClassName =
    "outline-none border border-stone-400 text-stone-400 focus:border-stone-100 focus:text-stone-100 transition-3 px-4 bg-stone-950 rounded py-1 placeholder:text-stone-400"
  const PasswordInput = () => (
    <input
      type="password"
      name="password"
      placeholder="••••••"
      className={inputClassName}
    />
  )

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="email" className="text-stone-400 capitalize">
        {type}
      </label>
      {type === "password" ? (
        <PasswordInput />
      ) : (
        <input
          name={type}
          placeholder={`${type}...`}
          className={`${inputClassName} placeholder:italic`}
        />
      )}
    </div>
  )
}
export default Input
