import './App.css'

import { useRef } from 'react'

import { Editor } from './components/Editor'
import { Aside } from './components/Aside'
import { Navbar } from './components/Navbar'
import { StoreProvider } from './context/useStore'
import { useToggle } from './hooks/useToggle'

import {
  copyBlobImageToClipboard,
  downloadBlob,
  snapshotCreator
} from './helpers'

export default function App () {
  const ref = useRef<HTMLDivElement>(null)
  console.log('render')

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

    try {
      const blob = await snapshotCreator(ref.current)

      copyBlobImageToClipboard(blob)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <StoreProvider>
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
    </StoreProvider>
  )
}
