import portrait from '../assets/portrait.jpg'
import { nav, profile } from '../data'

const str = 'text-code-str'
const tag = 'text-accent'
const punct = 'text-muted'

export function Hero() {
  return (
    <div className="band hero-band">
      <header className="wrap flex items-center justify-between gap-4 py-5">
        <a
          href="#top"
          aria-label="Zahra Haghjoo, top of page"
          className="grid h-10 w-10 place-items-center rounded-md bg-pop font-display text-base font-bold leading-none tracking-[0.02em] text-pop-fg no-underline"
        >
          ZH
        </a>
        <nav aria-label="Sections" className="flex flex-wrap justify-end gap-x-5 gap-y-1 text-[0.9375rem] font-medium">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-1 no-underline hover:text-pop hover:underline hover:underline-offset-4"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="wrap grid gap-10 pt-8 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:items-end md:gap-14">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
            <img
              src={portrait}
              width={168}
              height={168}
              alt="Illustrated portrait of Zahra Haghjoo"
              className="aspect-square h-auto w-[clamp(7.5rem,24vw,10.5rem)] flex-none rounded-full border-4 border-pop bg-band-2 object-cover shadow-[8px_8px_0_var(--band-2)]"
            />
            <div className="min-w-0 flex-[1_1_15rem]">
              <p className="mb-3 font-mono text-[0.8125rem] font-medium uppercase leading-[1.4] tracking-[0.06em] text-band-muted">
                Tehran · Remote-friendly
              </p>
              <h1 className="font-display text-[clamp(2.5rem,7.5vw,4.5rem)] font-bold leading-none tracking-[-0.02em]">
                {profile.name}
              </h1>
              <p className="mt-3 font-display text-[clamp(1.125rem,2.6vw,1.5rem)] font-medium leading-[1.3]">
                {profile.role}
              </p>
            </div>
          </div>

          {profile.summary.map((paragraph, i) => (
            <p key={i} className={`max-w-[40rem] ${i === 0 ? 'mt-8' : 'mt-3'}`}>
              {paragraph}
            </p>
          ))}

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a className="btn" href="#work">
              See projects
            </a>
            <a className="link" href="#contact">
              Get in touch
            </a>
            <a className="link" href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <figure
          aria-label="Profile summary written as a React component"
          className="m-0 min-w-0 rounded-md border border-line bg-surface text-fg shadow-[8px_8px_0_var(--pop)]"
        >
          <figcaption className="border-b border-line px-5 py-[0.6rem] font-mono text-xs leading-[1.4] text-muted">
            Developer.jsx
          </figcaption>
          <pre className="m-0 overflow-x-auto px-5 pb-5 pt-4 font-mono text-[0.8125rem] leading-[1.75] text-fg">
            <code>
              <span className={tag}>{'<Developer'}</span>
              {'\n'}
              {'  name='}
              <span className={str}>{'"Zahra Haghjoo"'}</span>
              {'\n'}
              {'  role='}
              <span className={str}>{'"Senior Frontend"'}</span>
              {'\n'}
              {'  stack='}
              <span className={punct}>{'{['}</span>
              <span className={str}>{'"React"'}</span>
              {', '}
              <span className={str}>{'"TypeScript"'}</span>
              {', '}
              <span className={str}>{'"Nx"'}</span>
              <span className={punct}>{']}'}</span>
              {'\n'}
              {'  experience='}
              <span className={str}>{'"7+ years"'}</span>
              {'\n'}
              {'  location='}
              <span className={str}>{'"Tehran"'}</span>
              {'\n'}
              {'  remote\n'}
              <span className={tag}>{'/>'}</span>
            </code>
          </pre>
        </figure>
      </section>
    </div>
  )
}
