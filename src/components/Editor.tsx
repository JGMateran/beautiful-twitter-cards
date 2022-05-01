import { forwardRef } from 'react'

import styles from './Editor.module.css'

import type { CardProps } from './TweetCard'
import { TweetCard } from './TweetCard'

import { useStore } from '../context/useStore'

export const Editor = forwardRef<HTMLDivElement, CardProps>(
  function EditorRef (_, ref) {
    const { state } = useStore()

    return (
      <div className={styles.pattern}>
        <TweetCard
          ref={ref}
          content={state.content}
          date={state.date}
          stats={state.stats}
          theme={state.theme}
        />
      </div>
    )
  }
)
