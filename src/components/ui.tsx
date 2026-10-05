import type { ReactNode } from 'react'

/** Renders text where **double asterisks** mark bold. */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

export function Bullets({ items, small = false }: { items: string[]; small?: boolean }) {
  return (
    <ul className={`m-0 grid list-none gap-2 p-0 ${small ? 'mt-3' : 'mt-[0.875rem]'}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`relative max-w-[42rem] pl-[1.125rem] leading-[1.55] before:absolute before:left-0 before:top-[0.62em] before:h-[0.4rem] before:w-[0.4rem] before:rounded-full before:bg-accent ${
            small ? 'text-[0.9688rem]' : 'text-base'
          }`}
        >
          <Rich text={item} />
        </li>
      ))}
    </ul>
  )
}

export function Tags({ items, large = false, className = '' }: { items: string[]; large?: boolean; className?: string }) {
  return (
    <ul className={`m-0 flex list-none flex-wrap gap-1.5 p-0 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`rounded bg-soft px-[0.55rem] py-[0.4rem] font-mono font-medium leading-none text-fg ${
            large ? 'text-[0.8125rem]' : 'text-xs'
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

/** A label column beside the content, stacking on narrow screens. */
export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section
      id={id}
      className="wrap grid grid-cols-1 gap-6 border-t border-line py-14 first:border-t-0 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10"
    >
      <h2 className="font-display text-[1.75rem] font-bold leading-[1.15] tracking-[-0.015em]">{title}</h2>
      <div className="min-w-0">{children}</div>
    </section>
  )
}
