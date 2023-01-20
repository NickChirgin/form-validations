import { useState } from 'react'
import style from './FormInput.module.scss'

const FormInput = (props) => {
  const [focus, setFocus] = useState(false)
  const {label, id, onChange, errorMessage, ...inputProps} = props

  const handleFocus = () => {
    setFocus(true)
  }
  return (
    <div>
      <label className={style.label}>{label}</label>
      <input {...inputProps} onChange={onChange} className={style.input} onBlur={handleFocus} focused={focus.toString()}/>
      <span className={style.span}>{errorMessage}</span>
    </div>
  )
}

export default FormInput;