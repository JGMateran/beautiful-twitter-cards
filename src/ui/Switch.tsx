import clsx from 'clsx'

export function Switch ({
  open = false,
  onClick = () => {}
}: {
  open?: boolean,
  onClick?: () => void
}) {
  return (
    <button className="inline-block focus:outine-none focus-visible:ring-2" onClick={onClick}>
      <div className={clsx(
        'flex p-1 h-6 w-10 rounded-full duration-150',
        {
          'bg-slate-700 dark:bg-neutral-700': !open,
          'bg-blue-500': open
        }
      )}>
        <div
          className={clsx(
            'w-4 h-4 bg-white block rounded-full duration-150',
            {
              'translate-x-full': open
            }
          )}
        />
      </div>
    </button>
  )
}
