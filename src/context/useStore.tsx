import type { ReactNode } from 'react'

import type {
  CardThemes,
  CardSections
} from '../components/TweetCard'

import {
  useReducer,
  createContext,
  useContext
} from 'react'

type State = {
  theme: CardThemes,
  content: boolean,
  date: boolean,
  stats: boolean,
  drawer: boolean
}

type Action =
  | {
    type: 'change visibility',
    section: CardSections,
    payload: boolean
  }
  | {
    type: 'change theme',
    payload: CardThemes
  }
  | {
    type: 'toggle drawer'
  }

type Dispatch = (action: Action) => void

const StoreContext = createContext<
  { state: State, dispatch: Dispatch } | undefined
>(undefined)

function storeReducer (state: State, action: Action) {
  switch (action.type) {
    case 'change visibility': {
      return {
        ...state,
        [action.section]: action.payload
      }
    }

    case 'change theme': {
      return {
        ...state,
        theme: action.payload
      }
    }

    case 'toggle drawer': {
      return {
        ...state,
        drawer: !state.drawer
      }
    }

    default: {
      throw new Error('Unhandled action')
    }
  }
}

const storeInitialState: State = {
  theme: 'sunset',
  content: true,
  date: true,
  stats: true,
  drawer: false
}

export function useStore () {
  const context = useContext(StoreContext)

  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider')
  }

  return context
}

export function StoreProvider ({
  children
}: {
  children: ReactNode
}) {
  const [state, dispatch] = useReducer(storeReducer, storeInitialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}
