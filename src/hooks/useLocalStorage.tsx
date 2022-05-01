import {
  Dispatch,
  SetStateAction,
  useEffect
  ,
  useState
} from 'react'

type UseState<T> = [T, Dispatch<SetStateAction<T>>]

export function useLocalStorage (key: string, initialValue: string): UseState<string> {
  const [value, setValue] = useState<string>(initialValue)

  useEffect(
    () => {
      const storageValue = window.localStorage.getItem(key)

      if (storageValue !== null) {
        setValue(storageValue)
      } else {
        window.localStorage.setItem(key, initialValue)
      }
    },
    []
  )

  useEffect(
    () => {
      window.localStorage.setItem(key, value)
    },
    [value]
  )

  return [value, setValue]
}
