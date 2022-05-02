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
  drawer: boolean,
  share: number,
  comments: number,
  likes: number,
  copying: boolean
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
  | {
    type: 'change stats',
    name: 'share' | 'comments' | 'likes',
    payload: string
  }
  | {
    type: 'it is coping?',
    payload: boolean
  }

type Dispatch = (action: Action) => void

const StoreContext = createContext<
  { state: State, dispatch: Dispatch } | undefined
>(undefined)

function storeReducer (state: State, action: Action) {
  switch (action.type) {
    case 'change stats': {
      return {
        ...state,
        [action.name]: action.payload
      }
    }

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

    case 'it is coping?': {
      return {
        ...state,
        copying: action.payload
      }
    }

    default: {
      throw new Error('Unhandled action')
    }
  }
}

export function onCopyAction (dispatch: Dispatch) {
  dispatch({
    type: 'it is coping?',
    payload: true
  })

  setTimeout(
    () => {
      dispatch({
        type: 'it is coping?',
        payload: false
      })
    },
    200
  )
}

const storeInitialState: State = {
  theme: 'sunset',
  content: true,
  date: true,
  stats: true,
  drawer: false,
  share: 4100,
  comments: 284,
  likes: 7200,
  copying: false
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
