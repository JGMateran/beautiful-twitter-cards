import { useStore } from '../context/useStore'
import { Switch } from '../ui/Switch'
import { CardSections } from './TweetCard'

type OptionsProps = {
  open?: boolean,
  label: string,
  section: CardSections,
  onChange: (section: CardSections, open: boolean) => void
}

function Option ({
  open = false,
  onChange = () => {},
  label,
  section
}: OptionsProps) {
  return (
    <label className="flex my-4">
      <span className="flex-1 text-sm font-bold">
        {label}
      </span>
      <Switch
        open={open}
        onClick={() => onChange(section, !open)}
      />
    </label>
  )
}

export function Visibilily () {
  const { state, dispatch } = useStore()

  const handleChange = (section: CardSections, active: boolean) => {
    dispatch({
      type: 'change visibility',
      section,
      payload: active
    })
  }

  return (
    <>
      <Option
        open={state.content}
        label="Display content"
        section="content"
        onChange={handleChange}
      />
      {/* <Option
        open={state.date}
        label="Show date"
        section="date"
        onChange={handleChange}
      /> */}
      <Option
        open={state.stats}
        label="Display stats"
        section="stats"
        onChange={handleChange}
      />
    </>
  )
}
