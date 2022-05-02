import type {
  ComponentPropsWithoutRef,
  ElementType
} from 'react'

import clsx from 'clsx'

type ButtonProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  as?: T,
  variant?: 'primary' | 'secondary'
}

export function Button <T extends ElementType> (
  props: ButtonProps<T>
) {
  const {
    as: Component = 'button',
    className,
    variant = 'primary',
    ...rest
  } = props

  const classes = clsx(
    'inline-flex border border-transparent items-center leading-none py-3 px-4 text-sm font-bold active:scale-95',
    {
      'bg-blue-600 text-white': variant === 'primary',
      'bg-black text-white border-neutral-700/80': variant === 'secondary'
    },
    className
  )

  return (
    <Component
      className={classes}
      {...rest}
    />
  )
}
