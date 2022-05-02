import { Coffee, Menu } from 'react-feather'
import { Button } from '../ui/Button'
import { DarkmodeButton } from './DarkmodeButton'

import { useStore } from '../context/useStore'

export function Navbar () {
  const { dispatch } = useStore()

  const handleClick = () => {
    dispatch({
      type: 'toggle drawer'
    })
  }

  return (
    <div className="absolute top-0 left-0 w-full md:pr-80 w-full">
      <div className="w-full h-20 max-w-4xl w-full mx-auto px-6 flex items-center">
        <div className="flex-1"></div>

        <div className="flex items-center space-x-4">
          <DarkmodeButton />
          <Button
            variant="secondary"
            as="a"
            href="https://ko-fi.com/reburn"
            target="_blank"
            rel="noreferrer"
          >
            <span className="mr-2">
              Buy me a
            </span>
            <Coffee />
          </Button>
          <Button
            onClick={handleClick}
            variant="secondary"
            className="md:hidden"
          >
            <Menu />
          </Button>
        </div>
      </div>
    </div>
  )
}
