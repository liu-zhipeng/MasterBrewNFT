import React, { useMemo } from "react"
import "./Button.scss"
import { classNames } from "@util"

export default function Button({
  children,
  variant = "filled",
  className = "",
  block = true,
  onClick = () => null,
  disabled = false,
  ...props
}) {
  const classes = useMemo(() => {
    switch (variant) {
      case "outline":
        return classNames(
          "outline  bg-transparent focus:outline-none whitespace-nowrap text-sm hover:bg-primary text-primary font-semibold hover:text-secondary py-2 px-5 border border-primary hover:border-transparent rounded",
          disabled ? "opacity-60" : ""
        )

      case "filled":
      default:
        return classNames(
          "bg-primary-dark hover:bg-primary-darker text-sm text-black font-bold py-2 px-4 rounded-sm tracking-wide",
          disabled ? "pointer-events-none" : ""
        )
    }
  }, [variant])

  return (
    <button
      onClick={onClick}
      className={`Button ${block ? "w-full" : ""} ${classes} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
