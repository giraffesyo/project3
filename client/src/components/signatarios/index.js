import React from "react"
import "./style.css"

export function FormInline({ children }) {
  return (
    <div id="signop" className="form-check form-check-inline">
      {children}
    </div>
  )
}

export function Input({ onChange, value }) {
  return (
    <input
      onChange={onChange}
      className="form-check-input"
      type="checkbox"
      name="signatario"
      value={value}
    />
  )
}
export function Label({ children }) {
  return <label className="form-check-label">{children}</label>
}
