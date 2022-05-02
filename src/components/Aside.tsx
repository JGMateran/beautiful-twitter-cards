import {
  Download,
  Clipboard,
  X
} from 'react-feather'

import clsx from 'clsx'

import { Social } from './Social'
import { useStore } from '../context/useStore'

import { Button } from '../ui/Button'
import { Themes } from './Themes'
import { Visibilily } from './Visibility'
import { ChangeStats } from './ChangeStats'

export function Aside ({
  onDownload = () => {},
  onCopy = () => {}
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
          <ChangeStats />

          <div className="flex flex-col space-y-2 my-10">
            <Button onClick={onDownload} className="space-x-2 inline-flex items-center">
              <span className="flex-1">Download image</span>
              <Download className="w-4 h-4" />
            </Button>
            <Button
              onClick={onCopy}
              disabled={state.copying}
              className="space-x-2 inline-flex items-center disabled:opacity-70"
            >
              <span className="flex-1">
                {state.copying ? 'Copying...' : 'Copy to clipboard'}
              </span>
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
