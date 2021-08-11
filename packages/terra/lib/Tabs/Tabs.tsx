import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import s from './Tabs.module.less'

type TabsProps = {
  children?: React.ReactNode
  className?: string
  showDivider?: boolean
}
export function Tabs({ children, className = '', showDivider = false }: TabsProps) {
  return (
    <div
      className={classNames({ [s.tabs]: true, [className]: !!className, [s.tabBar]: showDivider })}
    >
      {children}
    </div>
  )
}

Tabs.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  showDivider: PropTypes.bool,
}

Tabs.defaultProps = { className: '' }
