import { useState } from 'react'
import Login from '../Login/Login';
import Register from '../Register'
import style from './Form.module.scss'

const Form = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegOpen, setIsRegOpen] = useState(false);

  const loginHandler = (setFunc) => {
    setFunc(prev => !prev)
  }

  return (
    <div className={style.form}>
      {isLoginOpen ? <Login closeHandler={() => loginHandler(setIsLoginOpen)}/> : isRegOpen ? <Register closeHandler={() => loginHandler(setIsRegOpen)}/> : <>
        <h2 className={style.form__title}>Welcome</h2>
      <p className={style.form__subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
      <button className={style.form__register} onClick={() => loginHandler(setIsRegOpen)}>Create account</button>
      <button className={style.form__login} onClick={() => loginHandler(setIsLoginOpen)}>Login</button>
      <span className={style.form__copy}>All rights reserved</span>
      </>}
  </div>
    
  )
}

export default Form;