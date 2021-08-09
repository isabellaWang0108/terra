import s from './Button.module.less'

console.log(s)

export const Button = ({ children }) => <button className={s.button}>{children}</button>
