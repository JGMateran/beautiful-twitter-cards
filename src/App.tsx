import './App.css'

import { useRef } from 'react'

import { Editor } from './components/Editor'
import { Aside } from './components/Aside'
import { Navbar } from './components/Navbar'

import { useToggle } from './hooks/useToggle'

import {
  onCopyAction,
  StoreProvider,
  useStore
} from './context/useStore'

import {
  copyBlobImageToClipboard,
  downloadBlob,
  snapshotCreator
} from './helpers'
import { CardEditor } from './components/CardEditor'

export default function App () {
  return (
    <StoreProvider>
      <CardEditor />
    </StoreProvider>
  )
}
