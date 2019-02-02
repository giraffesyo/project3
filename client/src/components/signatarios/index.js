import React from "react"
import "./style.css"

export function FormInline({ children }) {
  return (
    <div id="signop" className="form-check form-check-inline">
      {children}
    </div>
  )
}

export function Input({ onChange, value, unavailable }) {
  return (
    <input
      style={unavailableStyle(unavailable)}
      onChange={onChange}
      className="form-check-input"
      type="checkbox"
      name="signatario"
      value={value}
    />
  )
}
export function Label({ children, unavailable }) {
  return (
    <label style={unavailableStyle(unavailable)} className="form-check-label">
      {children}
    </label>
  )
}

const unavailableStyle = unavailable => ({
  color: unavailable ? "red" : "black"
})
