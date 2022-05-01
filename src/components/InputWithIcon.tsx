import styles from '../global.module.css'

import {
  MessageCircle,
  Share,
  Heart,
  X
} from 'react-feather'

import clsx from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

type IconName = 'comment' | 'share' | 'likes'

function getIconFromName (iconName: IconName) {
  switch (iconName) {
    case 'comment':
      return <Share className="absolute w-4 h-4 left-3" />

    case 'likes':
      return <Heart className="absolute w-4 h-4 left-3" />

    case 'share':
      return <MessageCircle className="absolute w-4 h-4 left-3" />

    default:
      throw new Error('Unknown icon name')
  }
}

type InputWithIconProps = ComponentPropsWithoutRef<'input'> & {
  iconName: IconName
}

export function InputWithIcon ({
  iconName,
  className,
  ...props
}: InputWithIconProps) {
  const icon = getIconFromName(iconName)

  return (
    <div className={clsx(
      'relative flex items-center border border-neutral-500 text-neutral-800 dark:text-white my-2',
      styles.uncontrol
    )}>
      {icon}
      <input
        type="number"
        className={clsx(
          'bg-transparent leading-none py-4 focus:outline-none focus-visible:ring-2 text-sm px-11 w-full text-black placeholder:text-neutral-700 dark:placeholder:text-neutral-400 dark:text-white'
        )}
        {...props}
      />
      <X className="absolute right-3 w-4 h-4" />
    </div>
  )
}
