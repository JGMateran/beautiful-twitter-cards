import { useRef } from 'react'

import { useToggle } from '../hooks/useToggle'

import { Editor } from './Editor'
import { Navbar } from './Navbar'
import { Aside } from './Aside'

import {
  snapshotCreator,
  downloadBlob,
  copyBlobImageToClipboard
} from '../helpers'

import {
  useStore,
  onCopyAction
} from '../context/useStore'

export function CardEditor () {
  const { dispatch } = useStore()

  const ref = useRef<HTMLDivElement>(null)
  const [drawerVisibility, toggleDrawerVisibility] = useToggle(true)

  const handleDownload = async () => {
    if (ref.current == null) return

    try {
      const blob = await snapshotCreator(ref.current)

      downloadBlob(blob, 'snapshot.png')
    } catch (e) {
      console.error(e)
    }
  }

  const handleCopy = async () => {
    if (ref.current == null) return

    onCopyAction(dispatch)

    try {
      const blob = await snapshotCreator(ref.current)

      copyBlobImageToClipboard(blob)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="leading-7 min-h-screen dark:bg-neutral-900 dark:text-white text-black bg-white duration-150">
      <Navbar />

      <Aside
        open={drawerVisibility}
        onClose={toggleDrawerVisibility}
        onDownload={handleDownload}
        onCopy={handleCopy}
      />

      <main className="md:pr-80 max-w-full overflow-auto">
        <div className="max-w-2xl mx-auto min-h-screen flex flex-col justify-center">
          <Editor ref={ref} />
        </div>
      </main>
    </div>
  )
}
