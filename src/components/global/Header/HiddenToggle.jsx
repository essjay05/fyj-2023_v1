import { useState } from 'react'

import './HiddenToggle.css'

const HiddenToggle = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <label>
      <input
        type='checkbox'
        onChange={() => {
          setIsChecked(!isChecked)
        }}
      />
      <span className={`checkbox ${isChecked ? 'checkbox--active' : ''}`}
        aria-hidden='true'
      />
      Don't you dare check me!
    </label>
  )
}

export default HiddenToggle