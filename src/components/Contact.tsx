import { useRef, useState } from 'react'
import { profile } from '../data'
import { Section } from './ui'

export function Contact() {
  const emailRef = useRef<HTMLAnchorElement>(null)
  const [status, setStatus] = useState('')
  const timer = useRef<number | undefined>(undefined)

  const say = (text: string) => {
    setStatus(text)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setStatus(''), 3500)
  }

  const selectFallback = () => {
    let ok = false
    try {
      if (emailRef.current) {
        const range = document.createRange()
        range.selectNodeContents(emailRef.current)
        const selection = window.getSelection()
        selection?.removeAllRanges()
        selection?.addRange(range)
        ok = document.execCommand('copy')
      }
    } catch {
      ok = false
    }
    say(ok ? 'Copied' : 'Address selected. Copy it with your keyboard.')
  }

  const copy = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(profile.email).then(() => say('Copied'), selectFallback)
    } else {
      selectFallback()
    }
  }

  return (
    <div className="band end-band">
      <Section id="contact" title="Contact">
        <div className="grid gap-5">
          <p className="max-w-[30rem] font-display text-[clamp(1.25rem,3vw,1.5rem)] font-medium leading-[1.35]">
            Happy to talk about front-end roles and remote work.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <a
              ref={emailRef}
              href={`mailto:${profile.email}`}
              className="break-words font-mono text-[clamp(1.0625rem,3.2vw,1.375rem)] font-medium leading-[1.3] text-band-fg decoration-pop decoration-2 underline-offset-[5px]"
            >
              {profile.email}
            </a>
            <button type="button" className="btn btn-ghost" onClick={copy}>
              Copy address
            </button>
            <span role="status" className="font-mono text-[0.8125rem] font-medium leading-[1.4] text-band-muted">
              {status}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          <p className="font-mono text-[0.8125rem] font-medium uppercase leading-[1.4] tracking-[0.06em] text-band-muted">
            {profile.place}
          </p>
        </div>
      </Section>
      <footer className="wrap block border-t border-band-line pb-10 pt-6 font-mono text-[0.8125rem] leading-normal text-band-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  )
}
