import { background } from '../data'
import { Rich, Section } from './ui'

export function Background() {
  return (
    <Section id="background" title="Background">
      <ul className="m-0 list-none p-0">
        {background.map((row) => (
          <li
            key={row.when}
            className="grid gap-x-8 gap-y-1 border-t border-line py-6 first:border-t-0 first:pt-0 sm:grid-cols-[11rem_minmax(0,1fr)]"
          >
            <div className="pt-[0.3rem] font-mono text-[0.8125rem] font-medium leading-[1.6] text-muted">{row.when}</div>
            <div className="min-w-0">
              {row.title && <h3 className="font-display text-xl font-semibold leading-[1.3]">{row.title}</h3>}
              {row.org && <p className="mt-0.5 font-semibold text-accent">{row.org}</p>}
              {row.notes?.map((note) => (
                <p key={note} className="mt-1.5 max-w-[40rem] first:mt-0">
                  <Rich text={note} />
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
