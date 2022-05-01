import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'normal'
}

export function Button ({
  className,
  variant = 'normal',
  ...props
}: ButtonProps) {
  const classes = clsx(
    {
      'focus:outline-none focus-visible:ring-2 active:scale-95 leading-none py-3 px-4 rounded-md bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-600/10': variant === 'normal'
    },
    className
  )

  return (
    <button
      className={classes}
      {...props}
    />
  )
}
