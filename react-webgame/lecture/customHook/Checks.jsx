import React from "react"

export const Checks = ({
    checkList,
    labels,
    onCheck
  }) => {
    return (
      <ul>
        {labels.map((label, idx) => (
          <li key={idx}>
            <label>
              <input
                type='checkbox'
                checked={checkList[idx]}
                onClick={() => onCheck(idx)}
              />
              {label}
            </label>
          </li>
        ))}
      </ul>
    )
}