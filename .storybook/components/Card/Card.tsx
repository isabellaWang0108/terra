import React from 'react'
import classNames from 'classnames'
import s from './Card.module.less'

interface CardProps {
  children: React.ReactNode
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

export const Card = ({ children, className = '', dataTest }: CardProps) => {
  return (
    <div
      className={classNames({
        [s.card]: true,
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
      [className]: !!className,
    })}
    style={{borderStyle:'none', padding:'6px 16px 0px 16px'}}
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
