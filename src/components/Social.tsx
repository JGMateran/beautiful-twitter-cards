import {
  Coffee,
  GitHub,
  Twitter
} from 'react-feather'

export function Social () {
  return (
    <div className="flex justify-center space-x-2">
      <a href="#" className="p-2 focus:outline-none active:scale-95 focus-visible:ring-2">
        <Twitter />
      </a>
      <a href="#" className="p-2 focus:outline-none active:scale-95 focus-visible:ring-2">
        <GitHub />
      </a>
      <a href="#" className="p-2 focus:outline-none active:scale-95 focus-visible:ring-2">
        <Coffee />
      </a>
    </div>
  )
}
