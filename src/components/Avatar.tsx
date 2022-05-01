import type { ChangeEvent } from 'react'

import img from '../assets/face.jpg'

import { useState } from 'react'

export function Avatar () {
  const [image, setImage] = useState<string | null>(img)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files == null) return

    const [file] = e.currentTarget.files

    setImage(URL.createObjectURL(file))
  }

  return (
    <label>
      <input type="file" onChange={handleChange} className="hidden" />
      <div className="w-12 h-12 relative bg-translate">
        {
          image && (
            <img className="absolute w-full rounded-full h-full object-cover" src={image} alt="" />
          )
        }
      </div>
    </label>
  )
}
