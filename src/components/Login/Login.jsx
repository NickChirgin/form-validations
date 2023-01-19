import style from './Login.module.scss'
import close from '../../assets/Close.svg'

const Login = () => {
  return (
    <form action="" className={style.form}>
      <p className={style.form__welcome}>Welcome Back!!!</p>
      <div className={style.form__div}>
        <h2 className={style.form__login}>Login</h2>
        <img src={close} alt="" className={style.form__close}/>
      </div>
      <label htmlFor="email" className={style.form__label}>username/email</label>
      <input type="text" placeholder='email' className={style.form__input} name="email"/>
      <label htmlFor="password" className={style.form__label}>password</label>
      <input type="text" placeholder='password' className={style.form__input} name="password"/>
      <div className={style.form__checkbox}>
        <input type="checkbox" name="rem" id="" />
        <label htmlFor="rem">Remember me</label>
        <span>Forgot password?</span>
      </div>
    </form>
  )
}

export default Login;