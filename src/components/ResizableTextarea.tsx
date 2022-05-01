import type { ChangeEvent, ComponentPropsWithoutRef } from 'react'
import { useState } from 'react'

import clsx from 'clsx'

type ResizableTextareaProps = ComponentPropsWithoutRef<'textarea'> & {
  initialRows?: number,
  minRows?: number,
  maxRows?: number
}

export function ResizableTextarea ({
  className,
  initialRows = 1,
  minRows = 1,
  maxRows = 10,
  ...props
}: ResizableTextareaProps) {
  const [rows, setRows] = useState<number>(initialRows)
  const [value, setValue] = useState<string>('')

  const classes = clsx(
    className
  )

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textareaLineHeight = 28

    const previousRows = e.currentTarget.rows
    e.target.rows = minRows

    const currentRows = Math.floor(e.currentTarget.scrollHeight / textareaLineHeight)

    if (currentRows === previousRows) {
      e.currentTarget.rows = currentRows
    }

    if (currentRows >= maxRows) {
      e.currentTarget.rows = maxRows
      e.currentTarget.scrollTop = e.currentTarget.scrollHeight
    }

    setValue(e.currentTarget.value)
    setRows(currentRows < maxRows ? currentRows : maxRows)
  }

  return (
    <textarea
      className={classes}
      onChange={handleChange}
      value={value}
      rows={rows}
      {...props}
    />
  )
}
