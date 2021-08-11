import React from 'react'
import s from './button.module.less'

const Button = ({ children }: any) => (<button className={s.button}>{children}</button>)

export default Button
