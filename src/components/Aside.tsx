import {
  Download,
  Clipboard,
  X,
  MessageCircle,
  Share,
  Heart
} from 'react-feather'

/*
          <div className={clsx(
            'relative flex items-center border border-neutral-700 my-2',
            styles.uncontrol
          )}>
            <MessageCircle className="absolute w-4 h-4 left-3" />
            <input type="number" className="bg-transparent leading-none py-4 focus:outline-none focus-visible:ring-2 text-sm text-white pl-11 w-full" placeholder="Number of comments"/>
            <X className="absolute right-3 w-4 h-4" />
          </div>
          <div className={clsx(
            'relative flex items-center border border-neutral-700 my-2',
            styles.uncontrol
          )}>
            <Share className="absolute w-4 h-4 left-3" />
            <input type="number" className="bg-transparent leading-none py-4 focus:outline-none focus-visible:ring-2 text-sm text-white pl-11 w-full" placeholder="Number of shared" />
            <X className="absolute right-3 w-4 h-4" />
            </div> */

import styles from '../global.module.css'

import clsx from 'clsx'

import { Social } from './Social'
import { useStore } from '../context/useStore'

import { Button } from '../ui/Button'
import { Themes } from './Themes'
import { Visibilily } from './Visibility'
import { InputWithIcon } from './InputWithIcon'

export function Aside ({
  onDownload = () => {},
  onCopy = () => {},
  onClose = () => {}
}: {
  open?: boolean,
  onDownload?: () => void,
  onCopy?: () => void,
  onClose?: () => void,
}) {
  const { state, dispatch } = useStore()

  const classes = clsx(
    'fixed z-30 top-0 right-0 w-80 h-full bg-neutral-200 p-6 dark:bg-neutral-800 flex flex-col overflow-auto duration-150',
    {
      'translate-x-full md:translate-x-0': !state.drawer,
      'translate-x-0': state.drawer
    }
  )

  const handleClose = () => {
    dispatch({
      type: 'toggle drawer'
    })
  }

  return (
    <aside>
      <div className={classes}>
        <div className="flex-1">
          <div className="flex items-center mb-10">
            <h2 className="text-xl font-bold flex-1">
              Choose your config
            </h2>
            <button
              onClick={handleClose}
              className="md:hidden duration-150 w-8 h-8 flex items-center justify-center rounded-full bg-slate-300 dark:bg-neutral-700"
            >
              <X />
            </button>
          </div>

          <Themes />

          <Visibilily />

          <InputWithIcon
            iconName="share"
            placeholder="Number of shared"
          />

          <InputWithIcon
            iconName="comment"
            placeholder="Number of comments"
          />

          <InputWithIcon
            iconName="likes"
            placeholder="Number of likes"
          />

          <div className="flex flex-col space-y-2 my-10">
            <Button onClick={onDownload} className="space-x-2 inline-flex items-center">
              <span className="flex-1">Download image</span>
              <Download className="w-4 h-4" />
            </Button>
            <Button onClick={onCopy} className="space-x-2 inline-flex items-center">
              <span className="flex-1">Copy to clipboard</span>
              <Clipboard className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div>
          <Social />
        </div>
      </div>
    </aside>
  )
}
