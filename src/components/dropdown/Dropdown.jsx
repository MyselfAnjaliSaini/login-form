import React from 'react'
// import Dropdown from "react-dropdown"npm install @mui/icons-material
import "./dropdown.css"

export default function Dropdown({ label, value, options, onChange }) {
  return (
    <div>
      <label>
        {label}
        <select value={value} onChange={onChange}  className="select text-3">
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </div>
  )
}
