import { useState } from 'react'
import data from '../../helpers/input'
import close from '../../assets/Close.svg'
import style from './Register.module.scss'
import FormInput from '../FormInput/FormInput'

const Register = ({closeHandler, clickHandler}) => {
  const [value, setValue] = useState({
    "username": "",
    "email": "",
    "password": "",
    "confirmPassword": ""
  })

  const changeHandler = (e) => {
    setValue({...value, [e.target.name]: e.target.value})
  }

  return (
    <form className={style.register}>
      <p className={style.register__welcome}>Hello...</p>
      <h2 className={style.register__title}>Register</h2>
      <img src={close} alt="" onClick={closeHandler}/>
      {data.map(input => 
      <FormInput key={input.id} {...input} onChange={changeHandler} pattern={input.name === "confirmPassword" ? value.password : input.pattern} cfr={input.name}/>
        )}
      <button type='submit' className={style.register__button}>Register</button>
      <p className={style.register__login}>Already have an account? <span className={style.register__span} onClick={clickHandler}>Login</span></p>
    </form>
  )
}

export default Register;