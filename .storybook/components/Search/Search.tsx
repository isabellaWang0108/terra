import React from 'react'
import classNames from 'classnames'


type SearchProps<SearchValue extends string> = {
  children: React.ReactNode
  className?: string
  onChange: (a: { className: SearchValue }) => void
}

export function Search<SearchValue extends string>({
  children,
  onChange,
  className = 'h',
}: SearchProps<SearchValue>) {
  const handleChange = (e: React.ChangeEvent) => {
 
    console.log(e.nativeEvent, className);
  }


  return (
    <input
      onChange={handleChange}
    >
      {children}
    </input>
  )
}
