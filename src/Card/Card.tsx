import React from 'react'
import classNames from 'classnames'
import s from './Card.module.less'

interface CardProps {
  children: React.ReactNode
  type?: 'default' | 'alert' | 'success'
  dataTest?: string
  className?: string
}

interface CardHeaderProps {
  children?: React.ReactNode
  className?: string
}

interface CardContentProps {
  children?: React.ReactNode
  isPadded?: boolean
  className?: string
}

interface CardFooterProps {
  children?: React.ReactNode
  className?: string
}

export const Card = ({ children, className = '', dataTest, type = 'default' }: CardProps) => {
  return (
    <div
      className={classNames({
        [s.card]: true,
        [s[type]]: type !== 'default',
        [className]: !!className,
      })}
      data-test={dataTest}
    >
      {children}
    </div>
  )
}

const CardHeader = ({ className = '', children }: CardHeaderProps) => (
  <div
    className={classNames({
      [s.cardHeader]: true,
      'u-border-bottom': true,
      [className]: !!className,
    })}
  >
    {children}
  </div>
)

const CardContent = ({ className = '', isPadded = false, children }: CardContentProps) => (
  <div
    className={classNames({
      [s.cardContentPadded]: isPadded,
      [className]: !!className,
    })}
  >
    {children}
  </div>
)

const CardFooter = ({ className = '', children }: CardFooterProps) => (
  <div className={classNames({ [s.cardFooter]: true, [className]: !!className })}>{children}</div>
)

Card.Header = CardHeader
Card.Content = CardContent
Card.Footer = CardFooter
