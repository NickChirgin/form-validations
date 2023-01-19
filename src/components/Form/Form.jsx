import { useState } from 'react'
import Login from '../Login/Login';
import style from './Form.module.scss'

const Form = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegOpen, setIsRegOpen] = useState(false);

  const loginHandler = () => {
    setIsLoginOpen(prev => !prev)
  }

  return (
    <div className={style.form}>
      {isLoginOpen ? <Login /> : <>
        <h2 className={style.form__title}>Welcome</h2>
      <p className={style.form__subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
      <button className={style.form__register}>Create account</button>
      <button className={style.form__login} onClick={loginHandler}>Login</button>
      <span className={style.form__copy}>All rights reserved</span>
      </>}
    
  </div>
    
  )
}

export default Form;