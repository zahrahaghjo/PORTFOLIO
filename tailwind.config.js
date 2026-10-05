/** Colors point at CSS variables (src/index.css) so light and dark themes switch in one place. */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '40rem',
      md: '56rem',
    },
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        soft: 'var(--soft)',
        fg: 'var(--fg)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        accent: 'var(--accent)',
        'accent-fg': 'var(--accent-fg)',
        band: 'var(--band)',
        'band-2': 'var(--band-2)',
        'band-fg': 'var(--band-fg)',
        'band-muted': 'var(--band-muted)',
        'band-line': 'var(--band-line)',
        pop: 'var(--pop)',
        'pop-fg': 'var(--pop-fg)',
        'code-str': 'var(--code-str)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Avenir Next"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        body: ['Figtree', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
