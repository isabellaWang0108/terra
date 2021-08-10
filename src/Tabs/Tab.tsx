import React from 'react'
import classNames from 'classnames'
import s from './Tabs.module.less'

export const KEYBOARD = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  enter: 13,
  esc: 27,
  tab: 9,
  backspace: 8,
  space: 32,
  a: 65,
  p: 80,
  at: 64,
  comma: 188,
}

export type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2x'

type TabProps<TabId extends string> = {
  id: TabId
  fontSize?: FontSize
  children: React.ReactNode
  selected?: boolean
  iconOnly?: boolean
  className?: string
  title?: string
  onClick: (a: { id: TabId }) => void
}

export function Tab<TabId extends string>({
  id,
  children,
  fontSize = 'md',
  selected = false,
  iconOnly = false,
  onClick,
  className = '',
  title = '',
}: TabProps<TabId>) {
  const handleClick = () => {
    onClick({ id })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === KEYBOARD.enter || e.keyCode === KEYBOARD.space) {
      onClick({ id })
    }
  }

  return (
    <a
      role="tab"
      className={classNames({
        [s.tab]: true,
        [s.selected]: selected,
        [s.iconOnly]: iconOnly,
        [`u-font-${fontSize}`]: true,
        [className]: !!className,
      })}
      aria-selected={selected}
      aria-controls={id}
      data-test={selected ? 'selected-tab-option' : 'tab-option'}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      title={title}
      tabIndex={0}
    >
      {children}
    </a>
  )
}
