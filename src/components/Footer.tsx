import {
  Twitter,
  GitHub,
  Coffee
} from 'react-feather'

import { Container } from './Container'

export function Footer () {
  return (
    <div className="absolute bottom-0 left-0 right-0 md:mr-80">
      <Container className="flex items-center h-14 space-x-6 justify-center">
        <a href="#">
          <Twitter />
        </a>
        <a href="#">
          <GitHub />
        </a>
        <a href="#">
          <Coffee />
        </a>
      </Container>
    </div>
  )
}
