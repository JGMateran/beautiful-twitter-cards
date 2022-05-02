import type { ComponentPropsWithoutRef } from 'react'
import { useRef } from 'react'

import styles from '../global.module.css'

import clsx from 'clsx'
import {
  MessageCircle,
  Share,
  Heart,
  X,
  Search
} from 'react-feather'

type IconName = 'comment' | 'share' | 'likes' | 'search'

function getIconFromName (iconName: IconName) {
  switch (iconName) {
    case 'search':
      return <Search className="absolute w-4 h-4 left-3" />

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
  const inputRef = useRef<HTMLInputElement>(null)
  const icon = getIconFromName(iconName)

  const handleClean = () => {
    if (inputRef.current == null) return

    inputRef.current.value = ''
  }

  return (
    <div className={clsx(
      'relative flex items-center border border-neutral-700 text-neutral-800 dark:text-white my-2',
      styles.uncontrol
    )}>
      {icon}
      <input
        ref={inputRef}
        type="text"
        className="bg-transparent leading-none py-4 focus:outline-none focus-visible:ring-2 text-sm px-11 w-full text-black placeholder:text-neutral-700 dark:placeholder:text-neutral-400 dark:text-white"
        {...props}
      />
      <button onClick={handleClean} className="absolute right-3 w-4 h-4">
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
