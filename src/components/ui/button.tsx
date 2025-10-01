import * as React from "react"

interface ButtonProps {
  className?: string
  children: React.ReactNode
  variant?: any
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 rounded bg-yellow-600 hover:bg-yellow-700 text-black font-bold"
      {...props}
    >
      {children}
    </button>
  )
}
