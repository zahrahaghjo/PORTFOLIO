import { useState } from 'react'
import { orgFilters, projects, type OrgKey } from '../data'
import { Section, Tags } from './ui'

type Filter = 'all' | OrgKey

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all')
  const visible = filter === 'all' ? projects : projects.filter((p) => p.group === filter)
  const chips: { key: Filter; label: string }[] = [{ key: 'all', label: 'All' }, ...orgFilters]

  return (
    <Section id="work" title="Projects">
      <div role="group" aria-label="Filter projects by company" className="mb-6 flex flex-wrap items-center gap-2">
        {chips.map((chip) => {
          const active = chip.key === filter
          return (
            <button
              key={chip.key}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(chip.key)}
              className={`cursor-pointer rounded-md border px-[0.8rem] py-[0.4rem] font-body text-sm font-medium leading-[1.2] hover:border-accent ${
                active ? 'border-accent bg-accent text-accent-fg' : 'border-line bg-transparent text-fg'
              }`}
            >
              {chip.label}
            </button>
          )
        })}
        <span role="status" className="ml-auto font-mono text-[0.8125rem] font-medium leading-[1.4] text-muted">
          {filter === 'all' ? `${projects.length} projects` : `${visible.length} of ${projects.length} projects`}
        </span>
      </div>

      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,20rem),1fr))] gap-x-10 p-0">
        {visible.map((project) => (
          <li
            key={project.name}
            className="grid min-w-0 content-start gap-2 border-t-2 border-line pb-6 pt-[1.125rem] transition-colors hover:border-accent"
          >
            <div>
              <h3 className="font-display text-[1.125rem] font-semibold leading-[1.3]">{project.name}</h3>
              <p className="mt-0.5 font-mono text-xs font-medium leading-normal text-muted">{project.org}</p>
            </div>
            {project.text && <p className="text-[0.9688rem] leading-[1.55]">{project.text}</p>}
            {project.tags && <Tags items={project.tags} className="mt-1" />}
          </li>
        ))}
      </ul>
    </Section>
  )
}
