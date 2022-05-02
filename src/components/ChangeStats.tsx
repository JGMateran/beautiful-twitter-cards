import type { ChangeEvent } from 'react'

import { InputWithIcon } from '../ui/InputWithIcon'

import { useStore } from '../context/useStore'

export function ChangeStats () {
  const { state, dispatch } = useStore()

  const handleChange = (
    name: 'share' | 'comments' | 'likes',
    e: ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type: 'change stats',
      name,
      payload: e.currentTarget.value
    })
  }

  return (
    <>
      <InputWithIcon
        type="number"
        iconName="share"
        placeholder="Number of shared"
        value={state.share}
        onChange={(e) => handleChange('share', e)}
      />

      <InputWithIcon
        type="number"
        iconName="comment"
        placeholder="Number of comments"
        value={state.comments}
        onChange={(e) => handleChange('comments', e)}
      />

      <InputWithIcon
        type="number"
        iconName="likes"
        placeholder="Number of likes"
        value={state.likes}
        onChange={(e) => handleChange('likes', e)}
      />
    </>

  )
}
