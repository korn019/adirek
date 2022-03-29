import React from "react"

const Checkbox = ({id, type, name, handleClick, isChecked}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      onChange={handleClick}
      checked={isChecked}
      className="form-check-input"
    />
  )
}

export default Checkbox
