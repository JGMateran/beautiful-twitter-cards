import type { ReactNode } from 'react'

import clsx from 'clsx'

export function Container ({
  children,
  className = ''
}: {
  children: ReactNode,
  className?: string
}) {
  return (
    <div className={clsx(
      'w-full max-w-2xl mx-auto px-6',
      className
    )}>
      {children}
    </div>
  )
}
