import clsx from 'clsx'

import type { Ref } from 'react'
import { forwardRef } from 'react'

import {
  Share,
  MessageCircle,
  Heart
} from 'react-feather'

import { ResizableTextarea } from './ResizableTextarea'
import { Avatar } from './Avatar'
import { TwitterIcon } from './TwitterIcon'

export type CardThemes = 'sunset' | 'indigo' | 'candy' | 'crimson' | 'raindrop' | 'diamond' | 'lime' | 'rose'
export type CardSections = 'content' | 'date' | 'stats'

export type CardProps = {
  padding?: 'normal' | 'medium' | 'large' | 'big' | 'none',
  theme?: CardThemes,
  width?: 'normal',
  content?: boolean,
  date?: boolean,
  stats?: boolean,
  share?: number,
  comments?: number,
  likes?: number,
}

export const themes: Record<CardThemes, string> = {
  candy: 'bg-gradient-to-tr from-purple-500 to-purple-300',
  sunset: 'bg-gradient-to-br from-orange-300 to-orange-500',
  crimson: 'bg-gradient-to-br from-red-300 to-red-500',
  raindrop: 'bg-gradient-to-br from-blue-300 to-blue-500',
  lime: 'bg-gradient-to-br from-lime-300 to-lime-500',
  diamond: 'bg-gradient-to-br from-cyan-300 to-cyan-500',
  rose: 'bg-gradient-to-br from-rose-300 to-rose-500',
  indigo: 'bg-gradient-to-br from-indigo-300 to-indigo-500'
}

// function that convert a number to a valid twitter number
function convertToValidTwitterNumber (number: number | undefined): string {
  if (number === undefined) {
    return ''
  }

  if (number < 1000) {
    return number.toString()
  }

  if (number < 1000000) {
    return (number / 1000).toFixed(1) + 'k'
  }

  return (number / 1000000).toFixed(1) + 'm'
}

function Card (
  props: CardProps,
  ref: Ref<HTMLDivElement>
) {
  const {
    padding = 'medium',
    theme = 'sunset',
    width = 'normal',
    content = true,
    // date = true,
    stats = true,
    share,
    comments,
    likes
  } = props

  const classes = clsx(
    {
      'p-4': padding === 'normal',
      'p-8': padding === 'medium',
      'p-16': padding === 'large',
      'p-0': padding === 'none',
      'w-[672px]': width === 'normal'
    },
    themes[theme]
  )

  return (
    <div className={classes} ref={ref}>
      <div className="bg-white/40 rounded-lg text-black">
        <div className="rounded-md overflow-hidden">
          <div className="p-8">
            <div className="flex">
              <Avatar />
              <div className="px-3 flex flex-col flex-1 mr-2">
                <input
                  type="text"
                  className="bg-transparent text-lg font-bold mb-1 leading-none focus:outline-none focus-visible:ring-2 placeholder:text-black"
                  placeholder="Greg"
                />
                <input
                  type="text"
                  className="bg-transparent text-sm text-neutral-800 leading-none focus:outline-none focus-visible:ring-2 placeholder:text-neutral-800"
                  placeholder="@reburn_dev"
                />
              </div>
              <TwitterIcon />
            </div>

            {
              content && (
                <div className="mt-4">
                  <ResizableTextarea
                    initialRows={2}
                    className="w-full resize-none bg-transparent placeholder:text-black focus:outline-none p-2 -m-2 focus-visible:ring-2"
                    placeholder="You can change this content, the name, the username and the stats by clicking on them or in the configuration bar on the right"
                  />
                </div>
              )
            }

            {/*
              date && (
                <input className="text-sm text-neutral-800 placeholder:text-neutral-800 mt-4 bg-transparent focus:outline-none focus-visible:ring-2" placeholder="1:00PM - 23 Abr 2022" />
              )
            */}

            {
              stats && (
                <div className="flex mt-4 space-x-8 text-neutral-800 items-center">
                  <div className="flex items-center space-x-2">
                    <Share />
                    <strong className="text-black">
                      {convertToValidTwitterNumber(share)}
                    </strong>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle />
                    <strong className="text-black">
                      {convertToValidTwitterNumber(comments)}
                    </strong>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart />
                    <strong className="text-black">
                      {convertToValidTwitterNumber(likes)}
                    </strong>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export const TweetCard = forwardRef<HTMLDivElement, CardProps>(Card)
