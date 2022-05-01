import { useEffect } from 'react'

import { Moon, Sun } from 'react-feather'
import { Switch } from '../ui/Switch'

import { useLocalStorage } from '../hooks/useLocalStorage'

export function DarkmodeButton () {
  const [darkmode, setDarkmode] = useLocalStorage('theme', 'light')

  const handleClick = () => {
    setDarkmode(darkmode === 'light' ? 'dark' : 'light')
  }

  useEffect(
    () => {
      document.documentElement.classList.toggle('dark', darkmode === 'dark')
    },
    [darkmode]
  )

  return (
    <label className="flex items-center space-x-2">
      <Sun />
      <Switch
        open={darkmode === 'dark'}
        onClick={handleClick}
      />
      <Moon />
    </label>
  )
}
