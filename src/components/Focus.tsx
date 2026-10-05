import { focus } from '../data'
import { Bullets, Section } from './ui'

export function Focus() {
  return (
    <Section id="focus" title="Technical focus">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,19rem),1fr))] gap-x-10 gap-y-9">
        {focus.map((item) => (
          <div key={item.title} className="min-w-0">
            <h3 className="font-display text-[1.125rem] font-semibold leading-[1.3]">{item.title}</h3>
            <Bullets items={item.bullets} small />
          </div>
        ))}
      </div>
    </Section>
  )
}
