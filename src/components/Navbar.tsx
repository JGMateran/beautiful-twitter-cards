import { Coffee, Menu } from 'react-feather'
import { useStore } from '../context/useStore'
import { DarkmodeButton } from './DarkmodeButton'

export function Navbar () {
  const { dispatch } = useStore()

  const handleClick = () => {
    dispatch({
      type: 'toggle drawer'
    })
  }

  return (
    <div className="absolute top-0 left-0 w-full md:pr-80 w-full">
      <div className="h-20 max-w-6xl w-full mx-auto px-6 flex items-center justify-end">
        <div className="flex space-x-4 items-center">
          <DarkmodeButton />

          <a href="#" className="inline-flex items-center space-x-2 bg-black text-white leading-none py-2 font-bold px-3 rounded-md">
            <span className="text-sm">
              Buy me a
            </span>
            <Coffee />
          </a>

          <button onClick={handleClick} className="inline-flex md:hidden items-center space-x-2 bg-black text-white leading-none py-2 font-bold px-3 rounded-md">
            <Menu />
          </button>
        </div>
      </div>
    </div>
  )
}
