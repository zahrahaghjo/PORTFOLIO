import { skills } from '../data'
import { Section, Tags } from './ui'

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="m-0">
        {skills.map((group) => (
          <div
            key={group.label}
            className="grid gap-x-8 gap-y-[0.625rem] border-t border-line py-[1.125rem] first:border-t-0 first:pt-0 sm:grid-cols-[11rem_minmax(0,1fr)]"
          >
            <dt className="font-mono text-[0.8125rem] font-medium leading-[1.8] text-muted">{group.label}</dt>
            <dd className="m-0 min-w-0">
              <Tags items={group.items} large />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
