import type { CardThemes } from './TweetCard'

import clsx from 'clsx'

import { themes } from './TweetCard'
import { useStore } from '../context/useStore'

export function Themes () {
  const { state, dispatch } = useStore()

  const handleSelected = (key: CardThemes) => {
    dispatch({
      type: 'change theme',
      payload: key
    })
  }

  return (
    <div className="mb-10">
      <div className="grid grid-cols-4 gap-x-4 gap-y-6">
        {
          Object.entries(themes).map(([key, classes]) => (
            <div key={key}>
              <button className={clsx(
                'w-full after:block relative after:pt-[100%] rounded-full bg-white overflow-hidden',
                {
                  'ring-4': state.theme === key
                }
              )}>
                <span
                  onClick={() => handleSelected(key as CardThemes)}
                  className={clsx(
                    'focus:outline-none block absolute w-full h-full inset-0',
                    classes
                  )}
                />
              </button>
              <h4 className="text-xs font-bold mt-0 text-center">
                {key}
              </h4>
            </div>
          ))
        }
      </div>
    </div>
  )
}
