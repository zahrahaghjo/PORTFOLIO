import { jobs } from '../data'
import { Bullets, Section } from './ui'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ul className="m-0 list-none p-0">
        {jobs.map((job) => (
          <li
            key={`${job.org}-${job.when}`}
            className="grid gap-x-8 gap-y-1 border-t border-line py-6 first:border-t-0 first:pt-0 sm:grid-cols-[11rem_minmax(0,1fr)]"
          >
            <div className="pt-[0.3rem] font-mono text-[0.8125rem] font-medium leading-[1.6] text-muted">{job.when}</div>
            <div className="min-w-0">
              <h3 className="font-display text-xl font-semibold leading-[1.3]">{job.title}</h3>
              <p className="mt-0.5 font-semibold text-accent">{job.org}</p>
              <Bullets items={job.bullets} />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
