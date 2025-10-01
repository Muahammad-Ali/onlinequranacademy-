import * as React from "react"

interface Props {
  className?: string
  children: React.ReactNode
}

export function  Card({ children }:Props) {
  return <div className="rounded-lg shadow-md border bg-white">{children}</div>
}

export function CardContent({ children }: Props) {
  return <div className="p-4">{children}</div>
}
