import React from "react"
// Button components 
export type ButtonProps = {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean,
}