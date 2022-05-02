import {
  Coffee,
  GitHub,
  Twitter
} from 'react-feather'

import {
  TWITTER_URL,
  GITHUB_REPOSITORY_URL,
  KOFI_URL
} from '../constants'

export function Social () {
  return (
    <div className="flex justify-center space-x-2">
      <a href={TWITTER_URL} target="_blank" rel="noreferrer" className="p-2 focus:outline-none active:scale-95 focus-visible:ring-2">
        <Twitter />
      </a>
      <a href={GITHUB_REPOSITORY_URL} target="_blank" rel="noreferrer" className="p-2 focus:outline-none active:scale-95 focus-visible:ring-2">
        <GitHub />
      </a>
      <a href={KOFI_URL} target="_blank" rel="noreferrer" className="p-2 focus:outline-none active:scale-95 focus-visible:ring-2">
        <Coffee />
      </a>
    </div>
  )
}
